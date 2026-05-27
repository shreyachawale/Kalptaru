import { useState } from "react";
import { X, Phone, Mail, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  number: string;
  query: string;
}

export default function EnquiryForm(): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
    query: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: "", number: "", query: "" });
    }, 2000);
  };

  const styles: Record<string, React.CSSProperties> = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#FFFFFF",
      fontFamily: "'Cormorant Garamond', 'Crimson Text', serif",
    },
    wrapper: {
      maxWidth: "80rem",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "max(1rem, 5vw)",
      paddingRight: "max(1rem, 5vw)",
      paddingTop: "clamp(3rem, 8vw, 5rem)",
      paddingBottom: "clamp(3rem, 8vw, 5rem)",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
      gap: "max(2rem, 8vw)",
      alignItems: "start",
    },
    contentSection: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    titleWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    title: {
      fontSize: "clamp(2rem, 10vw, 3.5rem)",
      fontWeight: 300,
      color: "#372D67",
      lineHeight: 1.2,
      letterSpacing: "0.05em",
      margin: 0,
      fontFamily: "'Cormorant Garamond', serif",
    },
    subtitle: {
      fontSize: "clamp(1.25rem, 5vw, 1.5rem)",
      fontWeight: 300,
      color: "#AC9A84",
      letterSpacing: "0.02em",
      margin: 0,
    },
    divider: {
      height: "1px",
      backgroundColor: "#AC9A84",
      width: "6rem",
      border: "none",
    },
    paragraph: {
      fontSize: "clamp(1rem, 2vw, 1.125rem)",
      color: "#4B4B4B",
      lineHeight: 1.8,
    },
    sideCard: {
      backgroundColor: "#372D67",
      padding: "clamp(2rem, 5vw, 3rem)",
      position: "sticky",
      top: "5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    modalOverlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(55,45,103,0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      backdropFilter: "blur(4px)",
      padding: "1rem",
    },
    modalContent: {
      backgroundColor: "#FFFFFF",
      maxWidth: "45rem",
      width: "100%",
      overflow: "hidden",
    },
    modalHeader: {
      backgroundColor: "#372D67",
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
    },
    modalBody: {
      padding: "2rem",
    },
    input: {
      width: "100%",
      padding: "0.75rem 1rem",
      border: "1px solid #D1D5DB",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem 1rem",
      border: "1px solid #D1D5DB",
      resize: "none",
    },
    submitBtn: {
      width: "100%",
      backgroundColor: "#372D67",
      color: "#FFFFFF",
      padding: "1rem 2rem",
      fontSize: "1.125rem",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      cursor: "pointer",
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; }
      `}</style>

      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.gridContainer}>
            <div style={styles.contentSection}>
              <div style={styles.titleWrapper}>
                <h1 style={styles.title}>Training & Recruitment</h1>
                <p style={styles.subtitle}>for Jewellery Industry</p>
              </div>

              <div style={styles.divider} />

              <p style={styles.paragraph}>
                Kalptaru Jewellery Academy supports the jewellery industry with
                skilled workforce development and recruitment services.
              </p>
            </div>

            <div style={styles.sideCard}>
              <h3 style={{ color: "#fff", fontWeight: 300 }}>
                Seminars at Your Location
              </h3>
              <button
                onClick={() => setShowForm(true)}
                style={{
                  backgroundColor: "#AC9A84",
                  color: "#372D67",
                  padding: "1rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>

              <div style={{ color: "#fff", marginTop: "2rem" }}>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Phone size={20} color="#AC9A84" /> Request a callback
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Mail size={20} color="#AC9A84" /> Customized programs available
                </div>
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <div style={styles.modalHeader}>
                <h2 style={{ color: "#fff", fontWeight: 300 }}>Get in Touch</h2>
                <button
                  onClick={() => setShowForm(false)}
                  style={{ background: "none", border: "none", color: "#fff" }}
                >
                  <X />
                </button>
              </div>

              <div style={styles.modalBody}>
                {submitted ? (
                  <div style={{ textAlign: "center" }}>
                    <CheckCircle size={64} color="#372D67" />
                    <p>We’ll contact you soon</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      style={styles.input}
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <br />
                    <br />
                    <input
                      style={styles.input}
                      placeholder="Contact Number"
                      value={formData.number}
                      onChange={(e) =>
                        setFormData({ ...formData, number: e.target.value })
                      }
                      required
                    />
                    <br />
                    <br />
                    <textarea
                      style={styles.textarea}
                      placeholder="Your Query"
                      value={formData.query}
                      onChange={(e) =>
                        setFormData({ ...formData, query: e.target.value })
                      }
                      rows={4}
                      required
                    />
                    <br />
                    <br />
                    <button type="submit" style={styles.submitBtn}>
                      <Phone size={20} /> Request Call Back
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

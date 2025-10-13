# Valex — 7‑Day Keys (Free Key Generator)

**Valex** is a free key generator that issues temporary license keys valid for **7 days**. It produces a rotating pool of keys intended for testing, demos, or short-term access.

If a key doesn't work, try another key.

---

## Summary
- **What:** A free key generator that dispenses **100 keys** per cycle.  
- **Key lifetime:** **7 days** from issuance.  
- **Refresh cadence:** Pool refreshes every **5 minutes** (new keys issued; old keys remain valid until their 7‑day expiry).  
- **Status:** *Currently not patched* — treat as experimental; use with caution.

---

## Features
- ✅ Generates **100 keys** per cycle.  
- ⏳ **7‑day expiry**: every key is valid for exactly **7 days** after creation.  
- 🔁 **Auto-refresh**: new pool generated every **10 minutes** (does **not** retroactively invalidate previously generated keys — they expire in 7 days).  
- 📝 Optional metadata per key: `note`, `level`, `mask`, etc., if integrated with your licensing backend.

---

## Behavior & Lifetime (important)
- **Issuance timestamp:** Each key records a creation timestamp (UTC).  
- **Expiry rule:** Example: created `2025-10-11T22:04:53.033Z` → expires `2025-10-18T22:04:53.033Z` (UTC).  
- **Refresh vs Expiry:** Refreshing the pool every 10 minutes **adds new keys**. Keys created earlier remain usable until their 7‑day TTL is reached (they are not immediately revoked by a refresh).

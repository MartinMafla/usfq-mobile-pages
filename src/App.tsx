import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Estudiantes (Buyer Persona 1)
import EstudiantesInteres from "./pages/estudiantes/Interes";
import EstudiantesDecision from "./pages/estudiantes/Decision";
import EstudiantesAccion from "./pages/estudiantes/Accion";
import EstudiantesConfirmacion from "./pages/estudiantes/Confirmacion";

// Profesionales (Buyer Persona 2)
import ProfesionalesInteres from "./pages/profesionales/Interes";
import ProfesionalesDecision from "./pages/profesionales/Decision";
import ProfesionalesAccion from "./pages/profesionales/Accion";
import ProfesionalesConfirmacion from "./pages/profesionales/Confirmacion";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      
      {/* Rutas para Estudiantes (Buyer Persona 1) */}
      <Route path="/estudiantes" element={<EstudiantesInteres />} />
      <Route path="/estudiantes/decision" element={<EstudiantesDecision />} />
      <Route path="/estudiantes/accion" element={<EstudiantesAccion />} />
      <Route path="/estudiantes/confirmacion" element={<EstudiantesConfirmacion />} />
      
      {/* Rutas para Profesionales (Buyer Persona 2) */}
      <Route path="/profesionales" element={<ProfesionalesInteres />} />
      <Route path="/profesionales/decision" element={<ProfesionalesDecision />} />
      <Route path="/profesionales/accion" element={<ProfesionalesAccion />} />
      <Route path="/profesionales/confirmacion" element={<ProfesionalesConfirmacion />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
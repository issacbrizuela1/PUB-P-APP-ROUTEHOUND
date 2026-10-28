export type Lang = 'en' | 'es';
type Mark = 'yes' | 'partial' | 'no';

export const copy = {
  en: {
    title: 'Routehound: your API collection writes itself',
    description:
      'Desktop API client that indexes the endpoints of your projects from the code and keeps them in sync. Local-first, free.',
    navFeatures: 'Features',
    navCompare: 'Compare',
    navMain: 'Main',
    language: 'Language',
    themeLabel: 'Toggle dark theme',
    eyebrow: 'v0.2.0 · Free desktop API client',
    h1: 'Your API collection writes itself.',
    sub: 'Routehound indexes the endpoints of your projects straight from the code, keeps them in sync as it changes, and never sends a line of it to the cloud.',
    download: 'Download for Windows and Linux',
    kofi: 'Support on Ko-fi',
    soon: 'Linux: .deb, .rpm or AppImage · macOS coming soon · Builds are not code-signed yet',
    indexed: 'Indexed from routes/users.js',
    demoAlt: 'Routehound indexing an Express project and sending a request',
    demoCaption: 'Index a project, then send a request. No OpenAPI spec, no deployed traffic.',
    featuresTitle: 'Everything starts from your code',
    featuresSub:
      'Point it at a project folder. Routehound builds the collection, grouped by file, and keeps it honest as the code moves.',
    compareTitle: 'How it compares',
    feature: 'Feature',
    marks: { yes: 'Yes', partial: 'Partial', no: 'No' },
    supportTitle: 'Free, local, made by one developer',
    supportText: 'If Routehound saves you time, a coffee on Ko-fi helps keep it going.',
    supportBtn: 'Buy me a coffee on Ko-fi',
    license: 'PolyForm Shield 1.0.0, free to use, including at work',
    releases: 'Releases',
    features: [
      ['Indexing from code', 'Express, Fastify, NestJS, Next.js, Koa and Hono: imports, mounted routers, prefixes and aliases.'],
      ['Stays in sync', 'A folder watcher re-indexes and merges, keeping your names, saved requests and docs. Gone routes are flagged, not deleted.'],
      ['Local AI fallback', 'When the indexer finds nothing (FastAPI, Laravel, Spring, Go…), your LM Studio model proposes the routes for review.'],
      ['Request editor', 'Params, headers, body variants, {{variables}} with environments per collection (Local, Staging, Prod), port per endpoint, native send without CORS, history, cURL import and Ctrl K.'],
      ['Local-first', 'One folder per collection, one JSON file per endpoint, ready for git. Secrets stay in the OS keychain.'],
      ['Import and export', 'OpenAPI/Swagger (JSON or YAML), Postman v2.x and Bruno in. OpenAPI 3 out.'],
    ],
    rows: [
      ['Builds the collection from your code', ['yes', 'Node; others via local AI'], ['no', 'from an OpenAPI spec'], ['partial', 'from live traffic']],
      ['Keeps it in sync as code changes', ['yes', 'watcher + merge'], ['partial', 'spec sync'], ['partial', 'traffic agent']],
      ['Local-first, files in git', ['yes', ''], ['yes', ''], ['partial', '']],
      ['AI without sending code to the cloud', ['yes', 'LM Studio'], ['partial', ''], ['no', '']],
      ['Scripting, test runner, GraphQL/gRPC', ['no', 'not yet'], ['yes', ''], ['yes', '']],
    ],
  },
  es: {
    title: 'Routehound: tu colección de APIs se escribe sola',
    description:
      'Cliente de APIs de escritorio que indexa los endpoints de tus proyectos desde el código y los mantiene al día. Local y gratis.',
    navFeatures: 'Funciones',
    navCompare: 'Comparativa',
    navMain: 'Principal',
    language: 'Idioma',
    themeLabel: 'Cambiar tema oscuro',
    eyebrow: 'v0.2.0 · Cliente de APIs de escritorio, gratis',
    h1: 'Tu colección de APIs se escribe sola.',
    sub: 'Routehound indexa los endpoints de tus proyectos directamente desde el código, los mantiene al día cuando cambia y nunca envía una línea a la nube.',
    download: 'Descargar para Windows y Linux',
    kofi: 'Apoyar en Ko-fi',
    soon: 'Linux: .deb, .rpm o AppImage · macOS muy pronto · Los instaladores aún no tienen firma de código',
    indexed: 'Indexado desde routes/users.js',
    demoAlt: 'Routehound indexando un proyecto Express y enviando una petición',
    demoCaption: 'Indexa un proyecto y envía una petición. Sin spec OpenAPI ni tráfico desplegado.',
    featuresTitle: 'Todo empieza en tu código',
    featuresSub:
      'Apúntalo a la carpeta de un proyecto. Routehound arma la colección, agrupada por archivo, y la mantiene fiel mientras el código cambia.',
    compareTitle: 'Cómo se compara',
    feature: 'Función',
    marks: { yes: 'Sí', partial: 'Parcial', no: 'No' },
    supportTitle: 'Gratis, local y hecho por un solo desarrollador',
    supportText: 'Si Routehound te ahorra tiempo, un café en Ko-fi ayuda a que siga adelante.',
    supportBtn: 'Invítame un café en Ko-fi',
    license: 'PolyForm Shield 1.0.0, uso gratis, también en el trabajo',
    releases: 'Versiones',
    features: [
      ['Indexado desde el código', 'Express, Fastify, NestJS, Next.js, Koa y Hono: imports, routers montados, prefijos y alias.'],
      ['Siempre al día', 'Un watcher de carpeta reindexa y fusiona, conservando tus nombres, peticiones guardadas y docs. Las rutas que desaparecen se marcan, no se borran.'],
      ['IA local de respaldo', 'Si el indexador no encuentra nada (FastAPI, Laravel, Spring, Go…), tu modelo de LM Studio propone las rutas para revisarlas.'],
      ['Editor de peticiones', 'Params, headers, variantes de body, {{variables}} con entornos por colección (Local, Staging, Prod), puerto por endpoint, envío nativo sin CORS, historial, importar cURL y Ctrl K.'],
      ['Local primero', 'Una carpeta por colección y un JSON por endpoint, listo para git. Los secretos se quedan en el llavero del sistema.'],
      ['Importar y exportar', 'Entra OpenAPI/Swagger (JSON o YAML), Postman v2.x y Bruno. Sale OpenAPI 3.'],
    ],
    rows: [
      ['Arma la colección desde tu código', ['yes', 'Node; el resto con IA local'], ['no', 'desde un spec OpenAPI'], ['partial', 'desde tráfico real']],
      ['La mantiene al día cuando cambia el código', ['yes', 'watcher + merge'], ['partial', 'sync del spec'], ['partial', 'agente de tráfico']],
      ['Local primero, archivos en git', ['yes', ''], ['yes', ''], ['partial', '']],
      ['IA sin enviar código a la nube', ['yes', 'LM Studio'], ['partial', ''], ['no', '']],
      ['Scripting, test runner, GraphQL/gRPC', ['no', 'aún no'], ['yes', ''], ['yes', '']],
    ],
  },
} satisfies Record<Lang, {
  features: [string, string][];
  rows: [string, [Mark, string], [Mark, string], [Mark, string]][];
  marks: Record<Mark, string>;
  [key: string]: unknown;
}>;

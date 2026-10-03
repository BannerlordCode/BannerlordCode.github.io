import { basename } from 'node:path';

const MENTAL_HEADING_RE = /^#{2}\s+(?:心智模型|Mental\s*Model)\s*$/imu;
const DEP_OR_SEE_HEADING_RE =
  /^#{2}\s+(?:依赖|依赖关系|依赖图|依赖关联|Dependencies|Dependency|参见|See\s*Also|Related)\s*$/imu;
const OVERVIEW_HEADING_RE = /^#{2}\s+(?:概述|Overview)\s*$/imu;

const STUB_PATTERNS = [
  { id: 'mental-boilerplate-zh', re: /阅读时先通过属性了解状态/u },
  { id: 'mental-boilerplate-en', re: /Read properties (?:first )?to understand state|Read properties for state and methods for actions/iu },
  { id: 'overview-public-type-zh', re: /是\s+TaleWorlds\.\S+\s+下的公开类型/u },
  { id: 'overview-public-type-zh-alt', re: /是\s+TaleWorlds\.\S+\s+中的公开类型/u },
  { id: 'overview-public-type-en', re: /is a public type (?:in|under)\s+TaleWorlds\.\S+/iu },
  { id: 'placeholder-null-replace', re: /null;\s*\/\/\s*替换/u },
  { id: 'placeholder-somevalue', re: /\bSomeValue\b/ },
  { id: 'placeholder-service-ellipsis', re: /\bservice\s*=\s*\.\.\./u },
  { id: 'placeholder-service-assign', re: /\bservice\s*=\s*(?:null|Get\.\.\.)/u },
  { id: 'generic-subsystem-acquire', re: /从实际子系统 API[^\n]*获取[^\n]*实例/u },
  { id: 'generic-subsystem-acquire-en', re: /Obtain an instance of this type from the relevant subsystem API/iu },
];

const ZH_FORMULAIC_PURPOSE = [
  /^处理\s*['"`]?[^'"`]{1,80}['"`]?\s*相关[逻邏]辑[。；]?$/u,
  /^获取\s*['"`]?[^'"`]{1,80}['"`]?\s*的当前值[。；]?$/u,
  /^设置\s*['"`]?[^'"`]{1,80}['"`]?\s*(?:的当前值|的值|状态|数据)[。；]?$/u,
  /^重新计算并更新[^\n。]{0,60}的最新表示[。；]?$/u,
  /^为\s+.+\s+赋新值，并同步更新对象内部状态[。；]?$/u,
  /^返回当前对象中[^\n。]{0,60}的(?:结果|值)[。；]?$/u,
];

const FORMULAIC_FAMILY_PURPOSE = [
  /是\s+[\w.]+\s+(?:下|中)的公开类型/u,
  /is a public (?:TaleWorlds\s+)?type\b/iu,
  /is a public type (?:in|under)\s+/iu,
  /公开类型[。.]?\s*$/u,
  /提供可重写[（(]override\/virtual[）)]的定制点/u,
  /^[\w.`]+$/,
  /^-+$/,
  /^(?:用途|Purpose|类|类型|Type|典型时机|说明|备注|深页|已写|簇页用途句)$/i,
];

const BOILERPLATE_MENTAL = [
  /^阅读时先通过属性了解状态/,
  /^Read properties/,
  /^先从命名空间/,
  /^Start from namespace/,
  /入口或数据节点/,
  /entry point or data node/i,
];

const NOISE_PREFIX =
  /^(Steamworks|Galaxy|GalaxyCSharp|Newtonsoft|System|jose|JetBrains|Harmony|Mono|Microsoft|Alex|nunit|Xceed|LiteDB|MessagePack|ZeroMQ|Razor|Selenium|Cef|WebDriver|Svg|Ookii|NLog|Custom|ManagedCallbacks|FxResources|Security)(\.|$)/i;

function normalizedPath(filePath) {
  return String(filePath).replace(/\\/g, '/');
}

function sectionBody(text, headingRe) {
  const match = text.match(headingRe);
  if (!match) return null;
  const rest = text.slice(match.index + match[0].length);
  const next = rest.search(/^#{1,2}\s+/m);
  return (next < 0 ? rest : rest.slice(0, next)).trim();
}

export function stripMdNoise(value) {
  return String(value || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_>#|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getTitle(text) {
  const frontmatter = text.match(/^---\r?\n[\s\S]*?^title:\s*"([^"]+)"/m);
  if (frontmatter) return frontmatter[1].trim();
  const heading = text.match(/^#\s+(.+)$/m);
  return heading ? heading[1].trim() : '';
}

export function getTypeLine(text) {
  const match = text.match(/\*\*(?:Type|类型)[：:]\*\*\s*(.+)$/m);
  return match ? match[1].trim() : '';
}

export function getNamespaceLine(text) {
  const match = text.match(/\*\*(?:Namespace|命名空间)[：:]\*\*\s*(.+)$/m);
  return match ? match[1].trim().replace(/[`]/g, '') : '';
}

function typeNameFromDeclaration(typeLine) {
  const match = String(typeLine || '').match(
    /\b(?:class|interface|struct|enum|delegate)\s+([A-Za-z_]\w*)/
  );
  return match ? match[1] : '';
}

function typeNameFromPath(filePath) {
  const base = basename(normalizedPath(filePath), '.md');
  if (base === '_index') return '';
  const collision = base.indexOf('__');
  return collision >= 0 ? base.slice(0, collision) : base;
}

export function extractPageIdentity(filePath, text, { version, language } = {}) {
  const namespace = getNamespaceLine(text);
  const typeName =
    typeNameFromDeclaration(getTypeLine(text)) || typeNameFromPath(filePath) || getTitle(text);
  if (!namespace || !typeName) return null;
  return { version, language, namespace, typeName };
}

function countMdLinks(section) {
  return section ? (section.match(/\[[^\]]+\]\([^)]+\)/g) || []).length : 0;
}

function extractPurposes(text) {
  const purposes = [];
  const re = /\*\*用途\s*(?:\/\s*Purpose)?[：:]\*\*\s*(.+)$/gimu;
  let match;
  while ((match = re.exec(text))) purposes.push(match[1].trim());
  return purposes;
}

function hasRealCsharpExample(text) {
  const re = /```csharp\r?\n([\s\S]*?)```/gi;
  let match;
  while ((match = re.exec(text))) {
    const body = match[1];
    if (/null;\s*\/\/\s*替换|SomeValue|service\s*=\s*\.\.\.|Get\.\.\.Implementation/u.test(body)) continue;
    const code = body
      .split(/\r?\n/)
      .map((line) => line.replace(/\/\/.*$/, '').trim())
      .filter(Boolean)
      .join('\n');
    if (!code) continue;
    if (
      /\b(?:Campaign|Mission|Game|Hero|SaveManager|MBObjectManager|Agent|MobileParty|ScreenManager|ScreenBase|GauntletLayer|ViewModel|InformationManager)\b/.test(code) &&
      /\.\w+/.test(code)
    ) {
      return true;
    }
    // generic calls like `.SyncData<T>(` are real calls; also allow word-boundary-free type mentions
    // (`CampaignBehaviorBase` contains `Campaign` but has no boundary after it).
    if (code.split(/\n/).length >= 3 && /\.[A-Za-z_]\w*(?:<[^>]*>)?\s*\(/.test(code)) return true;
  }
  return false;
}

function isNoisePage(filePath, title) {
  const path = normalizedPath(filePath);
  const combined = path + title;
  // `Platform.` must be preceded by a path separator. Without it the rule matches
  // the extension dot of any file whose name ENDS in "Platform" -- e.g.
  // "ApplicationPlatform.md" matches on the "." before "md", not on a namespace
  // segment. That silently classified 17 real public types as noise
  // (ApplicationPlatform, TwoDimensionPlatform, ITwoDimensionPlatform,
  // LauncherPlatform, TwoDimensionEnginePlatform, ...) across v1.3.0/v1.3.15/v1.4.5.
  // AutoGenerated / Newtonsoft / GauntletUI.PrefabSystem.Generated are intentionally
  // left unanchored: "AutoGeneratedSaveManager" genuinely IS engine-generated noise.
  if (/AutoGenerated|Newtonsoft|(^|\/)Platform\.|GauntletUI\.PrefabSystem\.Generated/i.test(combined)) return true;
  if (/Steamworks(\.|\/|$)/i.test(combined) && !/SteamWorkshop/i.test(combined)) return true;
  return false;
}

function parseTableRow(line) {
  if (!/^\|/.test(line) || /^\|\s*[-:\s|]+\s*\|/.test(line)) return null;
  return line.split('|').slice(1, -1).map((cell) => cell.trim());
}

function cleanCell(cell) {
  return String(cell || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isNonEmptyPurpose(raw, typeName) {
  const purpose = cleanCell(raw);
  if (purpose.length < 6 || purpose === typeName || purpose === `${typeName}.`) return false;
  if (FORMULAIC_FAMILY_PURPOSE.some((re) => re.test(purpose))) return false;
  const withoutTypes = purpose
    .replace(/\b[A-Z][A-Za-z0-9_]{1,80}\b/g, '')
    .replace(/[,;/|、，。\s]+/g, '')
    .trim();
  return Boolean(withoutTypes);
}

function parseTypeName(cell) {
  const cleaned = cleanCell(cell);
  const qualified = cleaned.match(/^(?:(?<namespace>[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)+)\.)?(?<typeName>[A-Za-z_]\w{1,80})$/);
  return qualified ? qualified.groups : null;
}

function parseTypeNames(cell) {
  const cleaned = cleanCell(cell);
  const parts = cleaned
    .split(/\s*(?:;|<br\s*\/?>|\n)\s*/i)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length === 0 || parts.length > 5) return [];
  const parsed = parts.map(parseTypeName);
  return parsed.every(Boolean) ? parsed : [];
}

function parseNamespace(cell) {
  const cleaned = cleanCell(cell);
  return /^[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*$/.test(cleaned) ? cleaned : null;
}

export function extractFamilyEntries(filePath, text) {
  const entries = [];
  const lines = text.split(/\r?\n/);
  let headers = null;

  for (let index = 0; index < lines.length; index++) {
    const cells = parseTableRow(lines[index]);
    if (!cells) continue;

    const nextLine = lines[index + 1] || '';
    if (/^\|\s*[-:\s|]+\s*\|/.test(nextLine)) {
      headers = cells.map((cell) => cleanCell(cell).toLowerCase());
      continue;
    }
    if (!headers || headers.length !== cells.length) continue;

    const typeIndex = headers.findIndex((h) => /^(?:type|class|类型|类)$/.test(h));
    const purposeIndex = headers.findIndex((h) => /(?:purpose|用途|说明|职责)/.test(h));
    const namespaceIndex = headers.findIndex((h) => /^(?:namespace|命名空间)$/.test(h));
    const timingIndex = headers.findIndex((h) => /(?:timing|时机)/.test(h));
    if (typeIndex < 0 || purposeIndex < 0) continue;

    const parsedTypes = parseTypeNames(cells[typeIndex]);
    if (!parsedTypes.length) continue;
    const namespace = namespaceIndex >= 0 ? parseNamespace(cells[namespaceIndex]) : null;
    for (const parsedType of parsedTypes) {
      if (!isNonEmptyPurpose(cells[purposeIndex], parsedType.typeName)) continue;
      entries.push({
        path: normalizedPath(filePath),
        namespace: parsedType.namespace || namespace,
        typeName: parsedType.typeName,
        purposeSnippet: stripMdNoise(cells[purposeIndex]).slice(0, 160),
        timingSnippet: timingIndex >= 0 ? stripMdNoise(cells[timingIndex]).slice(0, 160) : '',
      });
    }
  }

  const listRe = /^\s*[-*]\s+(?:\[`?([A-Za-z_][\w]*)`?\]\([^)]+\)|\*\*`?([A-Za-z_][\w]*)`?\*\*|`([A-Za-z_][\w]*)`)\s*[:：—–-]\s*(.+)$/;
  for (const line of lines) {
    const match = line.match(listRe);
    if (!match) continue;
    const typeName = match[1] || match[2] || match[3];
    const purpose = match[4];
    if (!isNonEmptyPurpose(purpose, typeName)) continue;
    entries.push({
      path: normalizedPath(filePath),
      namespace: null,
      typeName,
      purposeSnippet: stripMdNoise(purpose).slice(0, 160),
      timingSnippet: '',
    });
  }

  const unique = new Map();
  for (const entry of entries) {
    const key = `${entry.namespace || ''}\0${entry.typeName}`;
    if (!unique.has(key)) unique.set(key, entry);
  }
  return [...unique.values()];
}

function isFamilyIndex(filePath, text) {
  if (basename(normalizedPath(filePath)) !== '_index.md') return false;
  const mental = sectionBody(text, MENTAL_HEADING_RE);
  const mentalPlain = stripMdNoise(mental);
  const mentalReal = mentalPlain.length > 80 && !BOILERPLATE_MENTAL.some((re) => re.test(mentalPlain));
  return mentalReal && extractFamilyEntries(filePath, text).length > 0;
}

export function classifyPage(filePath, text) {
  const title = getTitle(text);
  const typeLine = getTypeLine(text);
  const isIndex = basename(normalizedPath(filePath)) === '_index.md';

  if (isNoisePage(filePath, title)) return { status: 'noise', reasons: ['noise-name'] };
  if (isIndex) {
    return isFamilyIndex(filePath, text)
      ? { status: 'family_entry_pass', reasons: ['family-index-with-purpose-entries'] }
      : { status: 'noise', reasons: ['section-index-or-family-shell'] };
  }
  if (!typeLine) return { status: 'noise', reasons: ['no-type-metadata'] };

  const mental = sectionBody(text, MENTAL_HEADING_RE);
  const mentalPlain = stripMdNoise(mental);
  const dependencies = sectionBody(text, DEP_OR_SEE_HEADING_RE);
  const dependencyLinks = countMdLinks(dependencies);
  const overview = sectionBody(text, OVERVIEW_HEADING_RE);
  const overviewPlain = stripMdNoise(overview);
  const purposes = extractPurposes(text);
  const formulaicPurposes = purposes.filter((purpose) =>
    ZH_FORMULAIC_PURPOSE.some((re) => re.test(purpose))
  );
  const realExample = hasRealCsharpExample(text);
  const reasons = [];

  for (const pattern of STUB_PATTERNS) {
    if (pattern.re.test(text)) reasons.push(pattern.id);
  }
  if (!mental) reasons.push('missing-mental-model-section');
  else if (mentalPlain.length < 40) reasons.push('empty-or-tiny-mental-model');
  else if (BOILERPLATE_MENTAL.some((re) => re.test(mentalPlain))) reasons.push('boilerplate-mental-model');
  if (!dependencies) reasons.push('missing-dependency-or-see-section');
  else if (dependencyLinks < 1) reasons.push('dependency-section-no-links');
  if (formulaicPurposes.length >= Math.max(1, Math.floor(purposes.length * 0.5)) && formulaicPurposes.length) {
    reasons.push('formulaic-purposes-majority');
  }

  const mentalReal =
    mental && mentalPlain.length > 80 && !BOILERPLATE_MENTAL.some((re) => re.test(mentalPlain));
  const dependenciesReal = dependencies && dependencyLinks >= 2;
  const overviewReal =
    overviewPlain &&
    overviewPlain.length > 60 &&
    !/^(?:`?[\w.<>]+`?\s+)?是\s+TaleWorlds\.\S+\s+(?:下|中)的公开类型[。.]?$/u.test(overviewPlain) &&
    !/^`?[\w.<>]+`?\s+is a public type (?:in|under)\s+TaleWorlds\.\S+[.]?$/iu.test(overviewPlain);
  const overviewOk = overviewReal || (!overview && mentalReal && text.length > 2000);
  const deep = mentalReal && dependenciesReal && realExample && overviewOk && reasons.length === 0;

  if (deep) {
    return {
      status: 'deep_pass',
      reasons: ['mental>80', `dep-or-see-links=${dependencyLinks}`, 'real-csharp-example', 'overview-ok'],
    };
  }

  if (!realExample) reasons.push('no-real-example');
  if (!mentalReal) reasons.push('weak-mental');
  if (!dependenciesReal) reasons.push('weak-deps');
  return { status: 'stub', reasons: [...new Set(reasons.length ? reasons : ['incomplete-not-deep'])] };
}

export function makeTypeIdentity({ version, language, namespace, typeName }) {
  return [version, language, namespace, typeName].map((value) => String(value || '')).join('\0');
}

export function resolveExplicitAlias(typeName, aliases = {}) {
  return Object.prototype.hasOwnProperty.call(aliases, typeName) ? aliases[typeName] : typeName;
}

export function isBaseNoiseNamespace(namespace) {
  if (!namespace) return false;
  if (NOISE_PREFIX.test(namespace)) return true;
  if (namespace.split('.').some((segment) => segment === 'CodeGenerator' || segment === 'GeneratedMessages' || /^AutoGenerated\d*$/.test(segment))) return true;
  return /^(?:TaleWorlds\.(?:PlatformService|PlayerServices|Diamond|ServiceDiscovery))(\.|$)/i.test(namespace);
}

export function isR1ExtraNoiseNamespace(namespace) {
  if (!namespace) return false;
  return /^(?:NetworkMessages|Messages|BattleServer|CustomBattleServer|Lobby)(\.|$)/i.test(namespace) ||
    /^psai(\.|$)/i.test(namespace) ||
    /\.Diamond(\.|$)/i.test(namespace) ||
    /^TaleWorlds\.(?:AchievementSystem|ActivitySystem|Avatar)(\.|$)/i.test(namespace) ||
    /^TaleWorlds\.MountAndBlade\.Multiplayer(\.|$)/i.test(namespace) ||
    /^SandBox\.Multiplayer(\.|$)/i.test(namespace) ||
    /^Multiplayer(\.|$)/i.test(namespace);
}

export function isBaseNoiseTypeName(typeName) {
  return Boolean(typeName && /AutoGenerated|Newtonsoft|Steamworks/i.test(typeName));
}

export function isR1ExtraNoiseTypeName(typeName) {
  return Boolean(typeName && (
    /^IMB[A-Z]/.test(typeName) ||
    /^(?:BattleServer|CustomBattleServer|Lobby)(?:[A-Z]|$)/.test(typeName)
  ));
}

export function isR1TargetType({ namespace, typeName }) {
  return !isBaseNoiseNamespace(namespace) &&
    !isR1ExtraNoiseNamespace(namespace) &&
    !isBaseNoiseTypeName(typeName) &&
    !isR1ExtraNoiseTypeName(typeName);
}

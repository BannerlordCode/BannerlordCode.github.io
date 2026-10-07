# Architecture Census — Raw Command Log

Worker: worker-88 (read-only; no files under `content/` modified)
Date: 2026-10-07
Repo root: `C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
Source tree: `C:\WorkSpace\Bannerlord\bannerlord-1.4.5`

---

## Step 1 — Locate architecture directories

Command:

```bash
cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io && ls -d content/*/*/architecture/
```

Raw output:

```
content/v1.3.0/en/architecture/
content/v1.3.0/zh/architecture/
content/v1.3.15/en/architecture/
content/v1.3.15/zh/architecture/
content/v1.4.5/en/architecture/
content/v1.4.5/zh/architecture/
content/v1.4.6/en/architecture/
content/v1.4.6/zh/architecture/
content/v1.4.7/en/architecture/
content/v1.4.7/zh/architecture/
content/v1.5.3/en/architecture/
content/v1.5.3/zh/architecture/
```

12 architecture directories (6 versions × 2 languages).

---

## Step 2 — List all .md files per architecture directory

Command:

```bash
cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io && for d in content/*/*/architecture/; do echo "=== $d ==="; ls "$d"*.md 2>/dev/null; done
```

Raw output:

```
=== content/v1.3.0/en/architecture/ ===
content/v1.3.0/en/architecture/_index.md
content/v1.3.0/en/architecture/module-system.md
content/v1.3.0/en/architecture/native-interop.md
content/v1.3.0/en/architecture/save-system.md
content/v1.3.0/en/architecture/sdk-overview.md
content/v1.3.0/en/architecture/version-delta.md
=== content/v1.3.0/zh/architecture/ ===
content/v1.3.0/zh/architecture/_index.md
content/v1.3.0/zh/architecture/module-system.md
content/v1.3.0/zh/architecture/native-interop.md
content/v1.3.0/zh/architecture/save-system.md
content/v1.3.0/zh/architecture/sdk-overview.md
content/v1.3.0/zh/architecture/version-delta.md
=== content/v1.3.15/en/architecture/ ===
content/v1.3.15/en/architecture/_index.md
content/v1.3.15/en/architecture/crash-boundaries.md
content/v1.3.15/en/architecture/developer-roadmap.md
content/v1.3.15/en/architecture/doc-contract.md
content/v1.3.15/en/architecture/module-system.md
content/v1.3.15/en/architecture/native-interop.md
content/v1.3.15/en/architecture/noise-policy.md
content/v1.3.15/en/architecture/sandbox-native-policy.md
content/v1.3.15/en/architecture/save-system.md
content/v1.3.15/en/architecture/sdk-overview.md
content/v1.3.15/en/architecture/version-delta.md
=== content/v1.3.15/zh/architecture/ ===
content/v1.3.15/zh/architecture/_index.md
content/v1.3.15/zh/architecture/crash-boundaries.md
content/v1.3.15/zh/architecture/developer-roadmap.md
content/v1.3.15/zh/architecture/doc-contract.md
content/v1.3.15/zh/architecture/module-system.md
content/v1.3.15/zh/architecture/native-interop.md
content/v1.3.15/zh/architecture/noise-policy.md
content/v1.3.15/zh/architecture/sandbox-native-policy.md
content/v1.3.15/zh/architecture/save-system.md
content/v1.3.15/zh/architecture/scenario-acceptance-E.md
content/v1.3.15/zh/architecture/sdk-overview.md
content/v1.3.15/zh/architecture/version-delta.md
=== content/v1.4.5/en/architecture/ ===
content/v1.4.5/en/architecture/_index.md
content/v1.4.5/en/architecture/crash-boundary.md
content/v1.4.5/en/architecture/developer-roadmap.md
content/v1.4.5/en/architecture/doc-contract.md
content/v1.4.5/en/architecture/milestone-report.md
content/v1.4.5/en/architecture/noise-policy.md
content/v1.4.5/en/architecture/roadmap.md
content/v1.4.5/en/architecture/sandbox-native-policy.md
content/v1.4.5/en/architecture/sdk-overview.md
=== content/v1.4.5/zh/architecture/ ===
content/v1.4.5/zh/architecture/_index.md
content/v1.4.5/zh/architecture/crash-boundaries.md
content/v1.4.5/zh/architecture/crash-boundary.md
content/v1.4.5/zh/architecture/developer-roadmap.md
content/v1.4.5/zh/architecture/doc-contract.md
content/v1.4.5/zh/architecture/milestone-report.md
content/v1.4.5/zh/architecture/module-system.md
content/v1.4.5/zh/architecture/native-interop.md
content/v1.4.5/zh/architecture/noise-policy.md
content/v1.4.5/zh/architecture/roadmap.md
content/v1.4.5/zh/architecture/sandbox-native-policy.md
content/v1.4.5/zh/architecture/save-system.md
content/v1.4.5/zh/architecture/scenario-acceptance-E.md
content/v1.4.5/zh/architecture/sdk-overview.md
content/v1.4.5/zh/architecture/version-delta.md
=== content/v1.4.6/en/architecture/ ===
content/v1.4.6/en/architecture/_index.md
content/v1.4.6/en/architecture/module-map.md
content/v1.4.6/en/architecture/sdk-overview.md
content/v1.4.6/en/architecture/version-delta.md
=== content/v1.4.6/zh/architecture/ ===
content/v1.4.6/zh/architecture/_index.md
content/v1.4.6/zh/architecture/module-map.md
content/v1.4.6/zh/architecture/sdk-overview.md
content/v1.4.6/zh/architecture/version-delta.md
=== content/v1.4.7/en/architecture/ ===
content/v1.4.7/en/architecture/_index.md
content/v1.4.7/en/architecture/module-system.md
content/v1.4.7/en/architecture/save-system.md
content/v1.4.7/en/architecture/sdk-overview.md
content/v1.4.7/en/architecture/ui-stack.md
content/v1.4.7/en/architecture/version-delta.md
=== content/v1.4.7/zh/architecture/ ===
content/v1.4.7/zh/architecture/_index.md
content/v1.4.7/zh/architecture/module-system.md
content/v1.4.7/zh/architecture/save-system.md
content/v1.4.7/zh/architecture/sdk-overview.md
content/v1.4.7/zh/architecture/ui-stack.md
content/v1.4.7/zh/architecture/version-delta.md
=== content/v1.5.3/en/architecture/ ===
content/v1.5.3/en/architecture/_index.md
content/v1.5.3/en/architecture/migration-from-1.4.5.md
content/v1.5.3/en/architecture/module-map.md
content/v1.5.3/en/architecture/sdk-overview.md
=== content/v1.5.3/zh/architecture/ ===
content/v1.5.3/zh/architecture/_index.md
content/v1.5.3/zh/architecture/migration-from-1.4.5.md
content/v1.5.3/zh/architecture/module-map.md
content/v1.5.3/zh/architecture/sdk-overview.md
```

Per-directory page counts: v1.3.0/en=6, v1.3.0/zh=6, v1.3.15/en=11, v1.3.15/zh=12, v1.4.5/en=9, v1.4.5/zh=15, v1.4.6/en=4, v1.4.6/zh=4, v1.4.7/en=6, v1.4.7/zh=6, v1.5.3/en=4, v1.5.3/zh=4. **Total = 87 architecture pages.**

---

## Step 3 — Extract first `# ` heading per file → `arch-existing-pages.tsv`

Note: a bash per-file loop (`for f in ...; do grep -m 1 '^# ' "$f"; done`) was attempted first but the shell loop was pathologically slow in this environment (timed out at 60s after only 17 files). Replaced with a single Node process that reads each file and matches `/^# (.+)$/m`.

Command (Node via sandbox):

```javascript
const fs = require('fs');
const path = require('path');
const root = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const contentDir = path.join(root, 'content');
const rows = [];
const noH1 = [];
for (const ver of fs.readdirSync(contentDir)) {
  const verPath = path.join(contentDir, ver);
  if (!fs.statSync(verPath).isDirectory()) continue;
  for (const lang of fs.readdirSync(verPath)) {
    const archDir = path.join(verPath, lang, 'architecture');
    if (!fs.existsSync(archDir)) continue;
    for (const f of fs.readdirSync(archDir).sort()) {
      if (!f.endsWith('.md')) continue;
      const full = path.join(archDir, f);
      const text = fs.readFileSync(full, 'utf8');
      const m = text.match(/^# (.+)$/m);
      const rel = path.relative(root, full).replace(/\\/g, '/');
      if (m) rows.push(rel + '\t' + m[1].trim());
      else noH1.push(rel);
    }
  }
}
rows.sort();
fs.writeFileSync(path.join(root, 'tools/_verify/arch-existing-pages.tsv'), rows.join('\n') + '\n');
```

Raw output:

```
total md files: 87
with H1: 87
without H1: []
--- first 5 rows ---
content/v1.3.0/en/architecture/_index.md	Architecture Overview (v1.3.0)
content/v1.3.0/en/architecture/module-system.md	Module System
content/v1.3.0/en/architecture/native-interop.md	Managed-Native Interop
content/v1.3.0/en/architecture/save-system.md	Save System / Save System
content/v1.3.0/en/architecture/sdk-overview.md	SDK Overview — Module Map and Developer Roadmap
--- last 3 rows ---
content/v1.5.3/zh/architecture/migration-from-1.4.5.md	从 1.4.5 迁移到 1.5.3
content/v1.5.3/zh/architecture/module-map.md	模块地图 / Module Map
content/v1.5.3/zh/architecture/sdk-overview.md	SDK 分层概览
```

Cross-check command (single grep over all files, first H1 per file):

```bash
grep -m 1 '^# ' content/*/*/architecture/*.md | wc -l
```

Raw output:

```
87
```

All 87 files have an H1 heading; 0 files without. TSV written to `tools/_verify/arch-existing-pages.tsv` (87 rows, 2 tab-separated fields each; verified with `awk -F'\t' '{print NF}' | sort -u` → `2`).

---

## Step 4 — Source tree layout in `../bannerlord-1.4.5`

Commands:

```bash
cd /c/WorkSpace/Bannerlord/bannerlord-1.4.5 && ls Bannerlord.Source
find Bannerlord.Source -name "*.cs" | wc -l
find Bannerlord.Source -name "ModuleManager.cs" -o -name "CampaignGameStarter.cs" -o -name "SaveManager.cs" -o -name "MissionBehavior.cs" -o -name "MBSubModuleBase.cs"
```

Raw output:

```
Modules.BirthAndDeath
Modules.CustomBattle
Modules.FastMode
Modules.Multiplayer
Modules.Native
Modules.SandBox
Modules.StoryMode
bin
README.md
---
8583
---
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs
Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSubModuleBase.cs
Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs
Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs
```

Note: decompiled C# lives under `Bannerlord.Source/bin/<Assembly>/<Namespace>/...` (8583 .cs files). There is no `ModuleManager.cs` file — the module system in 1.4.5 is the `TaleWorlds.ModuleManager` namespace (ModuleInfo/SubModuleInfo/ModuleHelper) plus the `Module` sealed class in `TaleWorlds.MountAndBlade`.

---

## Step 5 — Evidence group (a): module system / loading

Commands:

```bash
grep -rn "class ModuleManager" Bannerlord.Source --include="*.cs" | head -5
grep -rn "class MBModule" Bannerlord.Source --include="*.cs" | head -5
grep -rn "SubModule" Bannerlord.Source --include="*.cs" | grep -i "class\|LoadSubModules\|submodules" | head -8
grep -n "MBModule" Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Module.cs | head -5
grep -n "public sealed class Module" Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Module.cs
grep -n "SubModules" Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs | head -5
grep -n "class MBSubModuleBase" Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSubModuleBase.cs
```

Raw output:

```
=== class ModuleManager ===
(no matches)
=== class MBModule ===
(no matches)
=== SubModule ===
Bannerlord.Source/bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/UIResourceManager.cs:124:			foreach (SubModuleInfo subModule in module.SubModules)
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleHelper.cs:425:		foreach (SubModuleInfo subModule in moduleInfo.SubModules)
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs:13:	public readonly List<SubModuleInfo> SubModules;
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs:62:		SubModules = new List<SubModuleInfo>();
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs:70:		SubModules.Clear();
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs:149:		XmlNodeList xmlNodeList4 = xmlNode.SelectSingleNode("SubModules")?.SelectNodes("SubModule");
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs:165:			SubModules.Add(subModuleInfo);
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/SubModuleInfo.cs:10:public class SubModuleInfo
=== MBModule in Module.cs ===
269:		MBDebug.Print("MBModuleBase Initialize begin...");
270:		MBDebug.Print("MBModuleBase Initialize end...");
=== Module class line ===
30:public sealed class Module : DotNetObject, IGameStateManagerOwner
=== ModuleInfo SubModules ===
13:	public readonly List<SubModuleInfo> SubModules;
62:		SubModules = new List<SubModuleInfo>();
70:		SubModules.Clear();
149:		XmlNodeList xmlNodeList4 = xmlNode.SelectSingleNode("SubModules")?.SelectNodes("SubModule");
165:			SubModules.Add(subModuleInfo);
=== MBSubModuleBase ===
6:public abstract class MBSubModuleBase
```

Selected evidence (2 rows):

```
Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Module.cs:30	public sealed class Module : DotNetObject, IGameStateManagerOwner
Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs:13	public readonly List<SubModuleInfo> SubModules;
```

---

## Step 6 — Evidence group (b): GameModel decorator pattern

Commands:

```bash
grep -rn "GetModel" Bannerlord.Source/bin/TaleWorlds.CampaignSystem --include="*.cs" | head -8
grep -rn "AddModel" Bannerlord.Source --include="*.cs" | head -8
grep -rn "class MBGameModel\|MBGameModel" Bannerlord.Source --include="*.cs" | head -8
```

Raw output:

```
=== GetModel ===
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:59:	public T GetModel<T>() where T : GameModel
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:78:		T model = GetModel<T>();
=== AddModel ===
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:71:	public void AddModel(GameModel gameModel)
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:76:	public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs:211:		gameStarter.AddModel(new DefaultCharacterDevelopmentModel());
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs:212:		gameStarter.AddModel(new DefaultValuationModel());
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs:213:		gameStarter.AddModel(new DefaultItemDiscardModel());
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs:214:		gameStarter.AddModel(new DefaultMapVisibilityModel());
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs:215:		gameStarter.AddModel(new DefaultInformationRestrictionModel());
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs:216:		gameStarter.AddModel(new DefaultMapDistanceModel());
=== MBGameModel ===
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:76:	public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AgeModel.cs:5:public abstract class AgeModel : MBGameModel<AgeModel>
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AlleyModel.cs:10:public abstract class AlleyModel : MBGameModel<AlleyModel>
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs:6:public abstract class AllianceModel : MBGameModel<AllianceModel>
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ArmyManagementCalculationModel.cs:8:public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BanditDensityModel.cs:6:public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BannerItemModel.cs:6:public abstract class BannerItemModel : MBGameModel<BannerItemModel>
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BarterModel.cs:7:public abstract class BarterModel : MBGameModel<BarterModel>
```

Selected evidence (2 rows):

```
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:59	public T GetModel<T>() where T : GameModel
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:76	public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel
```

---

## Step 7 — Evidence group (c): save system

Commands:

```bash
grep -rn "class SaveManager" Bannerlord.Source --include="*.cs" | head -3
grep -n "SaveManager" Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs | head -5
grep -rn "SaveableTypeDefiner" Bannerlord.Source --include="*.cs" | head -8
```

Raw output:

```
=== class SaveManager ===
Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs:13:public static class SaveManager
=== SaveManager in file ===
13:public static class SaveManager
=== SaveableTypeDefiner ===
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:40:public class SaveableCampaignTypeDefiner : SaveableTypeDefiner
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs:18:	public class AllianceCampaignBehaviorTypeDefiner : SaveableTypeDefiner
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviors/BanditInteractionsCampaignBehavior.cs:23:	public class BanditInteractionsCampaignBehaviorTypeDefiner : SaveableTypeDefiner
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs:27:	public class CaravansCampaignBehaviorTypeDefiner : SaveableTypeDefiner
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviors/CompanionGrievanceBehavior.cs:20:	public class CompanionGrievanceBehaviorTypeDefiner : SaveableTypeDefiner
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs:22:	public class CraftingCampaignBehaviorTypeDefiner : SaveableTypeDefiner
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviors/LordDefectionCampaignBehavior.cs:23:	public class LordDefectionCampaignBehaviorTypeDefiner : SaveableTypeDefiner
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviors/PregnancyCampaignBehavior.cs:17:	public class PregnancyCampaignBehaviorTypeDefiner : SaveableTypeDefiner
```

Selected evidence (2 rows):

```
Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs:13	public static class SaveManager
Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:40	public class SaveableCampaignTypeDefiner : SaveableTypeDefiner
```

---

## Step 8 — Evidence group (d): Mission/UI boundary

Commands:

```bash
grep -n "class MissionBehavior\|MissionBehavior" Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs | head -5
grep -rn "ViewModel" Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs | head -5
grep -rn "class ViewModel" Bannerlord.Source --include="*.cs" | head -5
```

Raw output:

```
=== MissionBehavior ===
9:public abstract class MissionBehavior : IMissionBehavior
15:	public abstract MissionBehaviorType BehaviorType { get; }
=== ViewModel in MissionBehavior.cs ===
(no matches)
=== ViewModel class decl ===
Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs:9:public abstract class ViewModel : IViewModel, INotifyPropertyChanged
```

Selected evidence (2 rows):

```
Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs:9	public abstract class MissionBehavior : IMissionBehavior
Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs:9	public abstract class ViewModel : IViewModel, INotifyPropertyChanged
```

---

## Step 9 — Final verification of outputs

Commands:

```bash
wc -l tools/_verify/arch-existing-pages.tsv
awk -F'\t' '{print NF}' tools/_verify/arch-existing-pages.tsv | sort -u
wc -l tools/_verify/arch-topic-evidence.tsv
cat -A tools/_verify/arch-topic-evidence.tsv | head -3
```

Raw output:

```
87 tools/_verify/arch-existing-pages.tsv
2
8 tools/_verify/arch-topic-evidence.tsv
module-system-loading^IBannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Module.cs:30^Ipublic sealed class Module : DotNetObject, IGameStateManagerOwner$
module-system-loading^IBannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs:13^Ipublic readonly List<SubModuleInfo> SubModules;$
gamemodel-decorator^IBannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameStarter.cs:59^Ipublic T GetModel<T>() where T : GameModel$
```

(`^I` = tab, `$` = line end — confirms proper TSV formatting.)

---

## Summary

| Artifact | Path | Rows |
|---|---|---|
| Existing architecture pages | `tools/_verify/arch-existing-pages.tsv` | 87 |
| Topic evidence | `tools/_verify/arch-topic-evidence.tsv` | 8 (4 groups × 2) |
| Raw command log | `tools/_verify/arch-census-raw.md` | this file |

- Existing architecture pages: **87** (12 directories: 6 versions × en/zh)
- Evidence lines: **8** (4 topic groups × 2 `file:line` entries each)
- No files under `content/` were modified (read-only task).

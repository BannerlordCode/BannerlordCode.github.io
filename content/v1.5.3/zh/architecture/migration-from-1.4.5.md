---
title: "从 1.4.5 迁移到 1.5.3"
description: "Bannerlord 1.4.5 → 1.5.3 的 mod 迁移指南：删了什么、签名变了什么、新增了什么，每条都带两侧 .cs 证据路径，并按反编译 provenance 分层标注可信度。"
---

# 从 1.4.5 迁移到 1.5.3

> 本页**不含任何凭记忆写的结论**。每一条都由 `tools/_v153_migration-diff.mjs` 实跑两棵源码树得出，
> 并给出 1.4.5 与 1.5.3 两侧的 `.cs` 路径。复现命令见[方法与可信度](#方法与可信度)。

## 先读这一段

从 1.4.5 升到 1.5.3，**真正会打断你编译的东西只有两类**：

1. **58 个 public/internal 类型彻底消失**（三条独立证据链交叉确认，见[删了什么](#1-删了什么)）。
2. **一批核心方法的签名变了** —— 尤其是 `Mission`、`MapEventComponent`、`LobbyClient` 上（见[签名变了什么](#2-签名变了什么)）。

而**没有**发生的事同样重要，别被吓到：

- **没有任何程序集被删除。** 1.4.5 树覆盖的 56 个 `bin/` 程序集在 1.5.3 里一个不少。
- **多人（Multiplayer）命名空间没有重整。** `TaleWorlds.MountAndBlade.Multiplayer*` 的 12 个命名空间在两版逐字相同。
- **`TaleWorlds.Diamond` 没有被剔除。** 它在 1.5.3 里依然存在（映射到 [engine](../../api/engine/) 目录）；
  消失的只是 `TaleWorlds.Diamond.Socket` 子命名空间和 `ThreadedClient*` 那组线程化 REST 客户端。
- **`TaleWorlds.ObjectManager` 从来没有存在过。** 1.3.0 / 1.3.15 / 1.4.5 / 1.5.3 四棵树里
  `namespace TaleWorlds.ObjectManager` 的匹配数都是 **0**；`TaleWorlds.ObjectSystem` 四版都在，
  1.4.5 与 1.5.3 各 18 个文件。`MBObjectManager` 两版都住在
  `TaleWorlds.ObjectSystem/MBObjectManager.cs`。这是一次**更早期**的重命名，不是 1.4.5 → 1.5.3 的变化。

---

## 1. 删了什么

**58 个类型**在 1.4.5 里存在、在 1.5.3 里不存在。

**验证规程**：每一类都给出它在 1.4.5 树中的实际 `.cs` 路径，且必须落在
`bannerlord-1.4.5/Bannerlord.Source/bin/**` 或 `bannerlord-1.4.5/Bannerlord.Source/Modules.*/**` 之下。
两处都搜不到的，降级为「1.4.5 树未覆盖，无法判定」，**不写成删除**。

**交叉验证**：同样的 58 个类型，被三条独立证据链各自报出，一字不差：

| 证据链 | 基线 provenance | 报出的删除数 | 与 1.4.5 主链一致 |
|---|---|---|---|
| 1.4.5 → 1.5.3（主链） | 干净源码 | 58 | — |
| 1.4.7 → 1.5.3（同源对照） | ILSpy | 58 | **58 / 58** |
| 1.4.6 → 1.5.3（同源对照） | ILSpy | 58 | **58 / 58** |

三链一致、零例外，所以这 58 条是**真删除**，不是采集缺失。

### 1.1 FastMode 整个模块被砍（2 个类型）

| 类型 | 1.4.5 证据路径 |
|---|---|
| `TaleWorlds.CampaignSystem.FastMode.FastModeSubModule` | `bannerlord-1.4.5/Bannerlord.Source/Modules.FastMode/TaleWorlds.CampaignSystem.FastMode/FastModeSubModule.cs` |
| `TaleWorlds.CampaignSystem.FastMode.FastModeOptionsProvider` | `bannerlord-1.4.5/Bannerlord.Source/Modules.FastMode/TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs` |

`namespace TaleWorlds.CampaignSystem.FastMode` 在 1.5.3 树里的匹配文件数为 **0**（1.4.5 与 1.4.7 各为 3）。
**影响**：如果你的 mod 依赖过 FastMode 模块或继承过 `FastModeSubModule`，1.5.3 下无处可挂。

### 1.2 Diamond 的线程化 REST 客户端被移除（9 个类型）

| 类型 | 1.4.5 证据路径 |
|---|---|
| `TaleWorlds.Diamond.IClientSessionProvider` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond/IClientSessionProvider.cs` |
| `TaleWorlds.Diamond.ThreadedClient` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClient.cs` |
| `TaleWorlds.Diamond.ThreadedClientTask` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientCantConnectTask` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientCantConnectTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientConnectedTask` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientConnectedTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientDisconnectedTask` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientDisconnectedTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientHandleMessageTask` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientHandleMessageTask.cs` |
| `TaleWorlds.Diamond.ClientApplication.GenericThreadedRestSessionProvider` | `.../bin/TaleWorlds.Diamond/TaleWorlds.Diamond.ClientApplication/GenericThreadedRestSessionProvider.cs` |

（路径前缀均为 `bannerlord-1.4.5/Bannerlord.Source/`）

`TaleWorlds.Diamond.Socket` 整个子命名空间也一并消失（`ClientSocketSession`、`SocketMessage`）。
**注意**：这是 Diamond 的一小部分，**不是** Diamond 本身被删。

### 1.3 OpenGL 独立渲染后端整块移除（21 个类型）

`TaleWorlds.TwoDimension.Standalone.Native.OpenGL` 下的 `Opengl32`、`Opengl32ARB` 以及 15 个枚举
（`BeginMode`、`DataType`、`ShaderType`、`Target`、`TextureUnit` …）在 1.5.3 里全部不存在。
`GraphicsContext`、`OpenGLTexture`、`VertexArrayObject` 同样消失。

**1.5.3 用 DirectX 取代**：`TaleWorlds.TwoDimension.Standalone` 下的
`DirectXGraphicsContext`、`DirectXShader`、`DirectXTexture`、`DirectXVertexBuffer` 是新增类型，
`TaleWorlds.TwoDimension.Standalone.Native.Windows` 带来 27 个 D3D11 结构体。

**影响**：任何直接 P/Invoke `Opengl32` 的渲染 mod 在 1.5.3 下必须重写。

### 1.4 Campaign 侧的类型删除（10 个）

| 类型 | 1.4.5 证据路径（均在 `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/` 下） |
|---|---|
| `…CampaignBehaviors.IHideoutCampaignBehavior` | `TaleWorlds.CampaignSystem.CampaignBehaviors/IHideoutCampaignBehavior.cs` |
| `…CampaignBehaviors.VolunteerTroop` | `TaleWorlds.CampaignSystem.CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs` |
| `…ComponentInterfaces.ExecutionRelationModel` | `TaleWorlds.CampaignSystem.ComponentInterfaces/ExecutionRelationModel.cs` |
| `…GameComponents.DefaultExecutionRelationModel` | `TaleWorlds.CampaignSystem.GameComponents/DefaultExecutionRelationModel.cs` |
| `…MapEvents.BlockadeBattleMapEvent` | `TaleWorlds.CampaignSystem.MapEvents/BlockadeBattleMapEvent.cs` |
| `…Map.MapMarkerManager` | `TaleWorlds.CampaignSystem.Map/MapMarkerManager.cs` |
| `…Settlements.ISpottable` | `TaleWorlds.CampaignSystem.Settlements/ISpottable.cs` |
| `…ViewModelCollection.ClanManagement.ClanPartyBehaviorSelectorVM` | `…ViewModelCollection/…ClanManagement/ClanPartyBehaviorSelectorVM.cs` |
| `…ViewModelCollection.ClanManagement.ClanRoleMemberItemVM` | `…ViewModelCollection/…ClanManagement/ClanRoleMemberItemVM.cs` |
| `…ViewModelCollection.ClanManagement.ClanRoleAssignedThroughClanScreenEvent` | 1.5.3 移至 `…ClanManagement.Categories/`（同类型仍在，非删除） |

### 1.5 其余删除（16 个）

`TaleWorlds.MountAndBlade.UnderAttackType`、`TaleWorlds.MountAndBlade.View.ISiegeDeploymentView`、
`…View.MissionViews.Singleplayer.MissionEntitySelectionUIHandler`、
`…ViewModelCollection.Order.OrderSiegeMachineVM`、`…Order.OrderTargets`、
`TaleWorlds.MountAndBlade.GauntletUI.Widgets.{BoolStateChangerWidget, SceneNotificationDescriptionTextWidget,
ClanPartyRoleSelectionPopupWidget, ClanPartyRoleSelectionToggleWidget}`、
`SandBox.ViewModelCollection.Map.Tracker.MapTrackerProvider`。
证据路径见 `tools/_v153_diff_145.json` 的 `removedTypes[]`，每条都带 `file` 字段。

---

## 2. 签名变了什么

> **可信度警告。** 本节按 provenance 分层：
> **高** = 同源对照链（1.4.7 / 1.4.6 → 1.5.3）也报出同样差异 → 可盲信。
> **低** = 只有 1.4.5 混合 provenance 主链报出 → 反编译器可能只是换了写法 → **需人工复核**。

先看噪声规模，这决定了为什么要分层：

| 证据链 | 签名有变化的类型 | 成员签名变化 | 成员新增 | 成员移除 |
|---|---|---|---|---|
| 1.4.5 → 1.5.3（混合 provenance） | 1 461 | 5 693 | 1 758 | 818 |
| 1.4.7 → 1.5.3（同源） | 134 | 384 | 1 273 | 412 |
| 1.4.6 → 1.5.3（同源） | 137 | 387 | 1 335 | 413 |

同源链只报出 134–137 个类型，而混合链报出 1 461 个 —— **约 91% 的「签名变化」是反编译形态差异，不是 API 变化**。
典型例子：1.4.5 写 `public static PerkObject WrappedHandles => Instance._x;`，
1.5.3 写 `public static PerkObject WrappedHandles { get { return …; } }`。同一个 API，两种写法。

### 2.1 高可信（同源链确认）— 会打断编译

| 成员 | 1.4.7 签名 | 1.5.3 签名 | 破坏性 |
|---|---|---|---|
| `Mission.GetReinforcementPathsDataOfSide` | `public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum)` | `public MBReadOnlyList<ValueTuple<SpawnPathData, float>> GetReinforcementPathsDataOfSide(BattleSideEnum)` | **是** — 返回类型变了，元素从 `SpawnPathData` 变成元组 |
| `Mission.SpawnAgent` | `public Agent SpawnAgent(AgentBuildData, bool = false)` | `public Agent SpawnAgent(AgentBuildData, bool = false, Equipment = null, ItemObject = null)` | 否 — 新增可选参数，源码兼容 |
| `Mission.SetFormationPositioningFromDeploymentPlan` | `public void SetFormationPositioningFromDeploymentPlan(Formation)` | `public void SetFormationPositioningFromDeploymentPlan(Formation, bool = false)` | 否 — 新增可选参数 |
| `MapEventComponent.OnFinish` | `internal virtual void OnFinish()` | `protected virtual void OnFinish()` | **是** — 访问级别收窄，`internal` 的重写实现不再编译 |
| `MapEventComponent.InitializeComponent` | `internal void InitializeComponent()` | `public void InitializeComponent()` | 否 — 放宽 |
| `MapEventComponent.OnPartyAdded` | `internal virtual void OnPartyAdded(PartyBase)` | `public virtual void OnPartyAdded(PartyBase)` | 否 — 放宽 |
| `LobbyClient.ChangeRegion` | `public void ChangeRegion(string)` | `public async Task<bool> ChangeRegion(string)` | **是** — `void` 变 `Task`，调用点全部要改 |
| `LobbyClient.ChangeGameTypes` | `public void ChangeGameTypes(string)` | `public async Task<bool> ChangeGameTypes(string)` | **是** — 同上 |
| `LobbyClient.RequestJoinCustomGame` | `public async Task<bool> RequestJoinCustomGame(CustomBattleId, string, bool = false)` | `public async Task<bool> RequestJoinCustomGame(CustomBattleId, CustomGameJoinType, string)` | **是** — 形参个数与类型都变了 |
| `PerkHelper.AddPerkBonusForParty` | `public static void AddPerkBonusForParty(PerkObject, MobileParty, bool, ref ExplainedNumber, bool = false)` | `public static bool AddPerkBonusForParty(PerkObject, MobileParty, bool, ref ExplainedNumber)` | **是** — 返回类型 `void`→`bool`，并去掉一个参数 |
| `PerkHelper.AddPerkBonusForCharacter` | `public static void AddPerkBonusForCharacter(PerkObject, CharacterObject, bool, ref ExplainedNumber, bool = false)` | `public static bool AddPerkBonusForCharacter(PerkObject, BattleEnvironment, CharacterObject, bool, ref ExplainedNumber)` | **是** — 返回类型变、多一个参数 |
| `PerkHelper.GetCaptainPerksForTroopUsages` | `public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags)` | `public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags, BattleEnvironment = BattleEnvironment.Any)` | 否 — 新增可选参数 |
| `ClanPartyItemVM.Expense` / `.Income` | `public int Expense` | `public abstract int Expense` | **是** — 变抽象属性，子类必须实现 |
| `ClanPartyType.Expense` / `.Income` | `public int Expense` | `public abstract int Expense` | **是** — 同上 |

证据路径示例（两侧同构，只差目录层级）：
`bannerlord-1.4.7/TaleWorlds.MountAndBlade/Mission.cs` ↔ `bannerlord-1.5.3/TaleWorlds.MountAndBlade/Mission.cs`；
`bannerlord-1.4.7/TaleWorlds.CampaignSystem/MapEvents/MapEventComponent.cs` ↔ `bannerlord-1.5.3/TaleWorlds.CampaignSystem/MapEvents/MapEventComponent.cs`；
`bannerlord-1.4.7/TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs` ↔ `bannerlord-1.5.3/TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`；
`bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs` ↔ `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`。

### 2.2 低可信（仅混合 provenance 报出）— 需人工复核

主链另外报出约 1 327 个「有签名变化但同源链没报」的类型。**这些不要直接当迁移改动处理。**
复核方法：对单个类型跑

```bash
node tools/_v153_migration-diff.mjs --control --type TaleWorlds.CampaignSystem.Campaign
```

同源链报不出来的，多半是 `=>` vs `{ get { … } }`、闭包类、switch 字典化这类反编译形态差异。
完整清单在 `tools/_v153_diff_145.json` 的 `sigChanged[]`，每条都带 `oldSig` / `newSig` / 两侧 `file`。

---

## 3. 目录映射变了什么

这是**结构变化**，和「类型改名」是两件事，别混。

### 3.1 `gameplay` 桶在 1.5.3 被取消

v1.4.5 文档树有 `api/gameplay/`，下辖 `sandbox/` 与 `storymode/`。v1.5.3 树**没有 `gameplay`**：
`SandBox` 与 `StoryMode` 被提升为顶层桶 [sandbox](../../api/sandbox/) 与 [storymode](../../api/storymode/)。

**为什么值得单说**：Boss 实测 v1.4.5 文档树本身是脏的 —— 2 199 个类型名跨桶重复
（每个 `TaleWorlds.CampaignSystem` 类型在 `campaign/` 和 `campaign-ext/` 里各有一份），
513 个命名空间里有 171 个被拆到多个桶。照抄旧树会得到错误归属
（例如 `TaleWorlds.InputSystem` 落到 `campaign-ext`、`TaleWorlds.DotNet` 落到 `campaign-ext`）。
所以 v1.5.3 改为**按命名空间规则分桶**，不再继承 1.4.5 的目录语义。
`api/gameplay/` 下的 19 个旧 URL 在 1.5.3 无对应，**这是预期结果，不是断链**。

### 3.2 桶归属变化

| 1.4.5 旧目录 | 1.5.3 新目录 | 说明 |
|---|---|---|
| `core/Game.md` | `core-extra/Game.cs` | `Game` 从 core 挪到 core-extra |
| `campaign-ext/` + `campaign/` 双份 | `campaign/`（根命名空间）+ `campaign-ext/`（子域） | 去重，一个类型只留一份 |
| `gameplay/sandbox/` | `sandbox/` | 提升为顶层桶 |
| `gameplay/storymode/` | `storymode/` | 提升为顶层桶 |
| — | `network/` `activitysystem/` `achievementsystem/` | 新增域 |
| `campaign-ext/` 里的 ScreenBase / ScreenLayer / MBObjectBase | `gui/` / `campaign-ext/` | 消除跨桶重复 |

### 3.3 目录桶名 ≠ 类型改名

`TaleWorlds.ObjectManager → TaleWorlds.ObjectSystem` 是**类型/命名空间级**重命名，且它**不发生在**
1.4.5 → 1.5.3 之间（见开头）。而 `TaleWorlds.ObjectSystem` 这个命名空间在 v1.5.3 文档里落在
[campaign-ext](../../api/campaign-ext/) 桶 —— 这是**目录归属**，不是重命名。
两件事在本站分别记在：[模块地图](../module-map) 与本页。

---

## 4. 新增了什么

**158 个** `TaleWorlds.*` / `SandBox` / `StoryMode` 命名空间下的类型在 1.4.7→1.5.3 之间新增
（1.4.5 主链报 168 个，多出的 10 个因 1.4.5 树未覆盖，不计为真新增）。

按命名空间分组的重点：

| 命名空间 | 新增类型 | 是什么 |
|---|---|---|
| `TaleWorlds.TwoDimension.Standalone.Native.Windows` | 27 | D3D11 结构体，取代 OpenGL 后端 |
| `TaleWorlds.CampaignSystem.CampaignBehaviors` | 11 | `BattleWreckageCampaignBehavior`、`AdvancedStartWorldOptionsCampaignBehavior`、`HeroDailyXpCampaignBehavior`、`ExecutionCampaignBehavior` … |
| `SandBox.AdvancedStartOptions` | 10 | 高级开局选项（`AdvancedStartOptionsManager` 及其 typed option） |
| `TaleWorlds.MountAndBlade` | 8 | `SpectatorHelper`、`BasicTimer`、`TaskForceDetachment`、`FormationTargetingVisibilityModes` … |
| `SandBox.ViewModelCollection.CampaignStartingOptions` | 7 | 开局选项界面 VM |
| `TaleWorlds.CampaignSystem.MapNotificationTypes` | 6 | 血仇（Blood Feud）系列通知 |
| `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` | 6 | 血仇通知的 VM |
| `TaleWorlds.CampaignSystem.Incidents` | 5 | `IncidentManager`、`IncidentTrigger`、`IncidentHint` |
| `TaleWorlds.Engine` | 5 | `ITerrainEdit`、`TerrainEditContext`、`FloraDefinition`（地形编辑） |
| `TaleWorlds.CampaignSystem.MapEvents` | 4 | 攻城事件组件（`BlockadeBattleEventComponent`、`SiegeAssaultEventComponent` …） |
| `TaleWorlds.CampaignSystem.GameComponents` | 3 | `DefaultBattleWreckageModel`、`DefaultFerryModel`、`DefaultShipDistributionModel` |
| `TaleWorlds.CampaignSystem.AdvancedStartOptions` | 3 | `DefaultAdvancedStartOptions` 等 |
| `TaleWorlds.CampaignSystem.CharacterDevelopment` | 3 | `DefaultPersonalityTraitEffects`、`TraitEffectObject` |
| `StoryMode.GauntletUI.Tutorial` | 3 | 血仇教学（`StartingBloodFeudTutorial` 等） |

**新玩法系统**：1.5.3 加了**血仇（Blood Feud）**与**高级开局选项（Advanced Start Options）**两条线，
配套的通知类型、VM、战役行为、教学都是新类型。

**新程序集**（1.4.5 树未覆盖，因此计为「无法判定」而非「新增」）：
`TaleWorlds.MountAndBlade.Launcher`、`.SteamWorkshop`、`.SaveSystem.CodeGenerator`、
`.GauntletUI.CodeGenerator`、`.Multiplayer.2`、`.Multiplayer.GauntletUI.AutoGenerate`、`ManagedStarter`。
其中 SteamWorkshop 与 ManagedStarter 在 1.3.15 树里就存在，属 1.4.5 采集缺失。
另有 13 个程序集（如 `TaleWorlds.MountAndBlade.Multiplayer*`、`CustomBattle`、
`Platform.PC`、`View`、`GauntletUI`）在 1.4.5 树里位于 `Modules.*` 之下而非 `bin/`，
**不是新增**，只是摆放位置不同。

---

## 方法与可信度

### 复现命令

```bash
cd BannerlordCode.github.io

# 主链：1.4.5 → 1.5.3（混合 provenance）
node tools/_v153_migration-diff.mjs

# 同源对照 1：1.4.7 → 1.5.3
node tools/_v153_migration-diff.mjs --control

# 同源对照 2：1.4.6 → 1.5.3
node tools/_v153_migration-diff.mjs --base 1.4.6

# 机器可读输出
node tools/_v153_migration-diff.mjs --json tools/_v153_diff_145.json

# 单类型钻取
node tools/_v153_migration-diff.mjs --control --type TaleWorlds.CampaignSystem.Hero
```

### provenance 实测

| 树 | .cs | 含 ILSpy 标记 `// Token: 0x…` | 占比 | 结论 |
|---|---|---|---|---|
| `bannerlord-1.4.5` | 8 572 | **0** | 0.0% | 干净源码 |
| `bannerlord-1.4.6` | 11 092 | 11 092 | 100% | ILSpy 反编译 |
| `bannerlord-1.4.7` | 11 387 | 11 298 | 99.2% | ILSpy 反编译 |
| `bannerlord-1.5.3` | 11 487 | 11 398 | 99.2% | ILSpy 反编译 |

**整个对比集里唯一的干净源码基线是 1.4.5。** 脚本在比对前会剥掉 BOM 与
`// Token: 0x…`、`// (get) Token:`、`RVA:`、`File Offset:` 等反编译注释，
并把每个成员归一化为 `(修饰符, 返回类型, 名称, 访问器, 形参类型列表)` 后再比。
即便如此，混合 provenance 的比对仍会多报约 91% 的假签名差异 —— 这就是需要同源对照链的原因。

### 可信度分级

| 结论类型 | 可信度 | 依据 |
|---|---|---|
| 命名空间集合差异 | **高** | 文本位置即可判定，反编译不改变 |
| 类型名集合差异 | **高** | 同上 |
| 成员**名字**集合差异 | **高** | 名字是标识符，反编译器不改名 |
| 成员**完整签名**差异 | **低**（混合链）/ **中高**（同源链） | 反编译器会把 switch 还原成字典、闭包还原成 `<>c`、属性还原成 getter/setter 对 |
| 「某程序集被删除」 | **高** | Boss 实测：1.4.5 有而 1.4.6 无的程序集 = **0**，该层无假阳性 |
| 「某程序集是新增的」 | **低** | 1.4.5 树采集不完整，会把「没采到」误报成「新增」 |

### 已知局限（开放项）

1. **1.4.5 树采集不完整。** `bannerlord-1.4.5/Bannerlord.Source/` 只有 `bin/`（56 程序集）
   与 7 个 `Modules.*` 目录，缺 Launcher / Network / ServiceDiscovery 等。
   所以「新增」方向不可信，「删除」方向可信（本链只报「1.4.5 树里有 .cs、1.5.3 里没有」的项）。
2. **形参名不可信。** 归一化时丢弃了形参名（改名不算 API 变化），
   但反编译器对匿名形参会生成 `Equipment` / `ItemObject` 这类占位名，**不要**把形参名当证据。
3. **泛型与元组归一化粗糙。** `ValueTuple<,>` 与自定义结构体在文本层可能等价，本脚本无法判断，
   第 2.1 节已把返回类型变化标为破坏性，请人工确认。
4. **api 叶子覆盖未对平。** 本指南的结论基于源码全量扫描，与文档树的页面覆盖是两件事。
   目录桶归属见 [模块地图](../module-map)，覆盖缺口由文档侧的 inventory 统计。

---

## 迁移检查清单

1. 全文搜索你的 mod 是否引用了 [1.1](#11-fastmode-整个模块被砍2-个类型)–[1.5](#15-其余删除16-个) 里的 58 个类型。
2. 若用了 `Mission.SpawnAgent` / `SetFormationPositioningFromDeploymentPlan` / `GetCaptainPerksForTroopUsages`：
   新增的是**可选**参数，源码兼容，无需改。
3. 若用了 `GetReinforcementPathsDataOfSide` / `OnFinish` / `LobbyClient.*Region` / `LobbyClient.*GameTypes` /
   `AddPerkBonusFor*` / `RequestJoinCustomGame` / `ClanPartyItemVM.Expense`：**必须改**。
4. 若有 P/Invoke `Opengl32` 的代码：整块重写为 DirectX 路径。
5. 若继承过 `MapEventComponent`：把 `OnFinish` 的 `internal override` 改成 `protected override`。
6. 全文搜索 `TaleWorlds.ObjectManager` —— 应该是 0 命中；若有，那是更早期版本的遗留，不是 1.5.3 的改动。
7. 目录链接：旧站的 `api/gameplay/...` 路径失效，改指 [sandbox](../../api/sandbox/) 或 [storymode](../../api/storymode/)。

## 导航

- [↑ 架构总览](../) · [↑ 版本首页](../../)- [SDK 分层概览](../sdk-overview) — 分层心智模型
- [模块地图](../module-map) — 程序集与文档目录的对照表
- [跨版本类对比](../../../../versions/) — 逐类 API 差异

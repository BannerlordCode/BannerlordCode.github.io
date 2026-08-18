---
title: "CampaignGameMode"
description: "标记当前战役运行模式的枚举（无模式 / 标准战役 / 教程开发），由 Campaign 在构造时经 Campaign(CampaignGameMode) 一次性写入、运行期只能经 Campaign.Current.GameMode 只读读取，并据此驱动存档许可、模型启用范围与大量界面/行为分支。"
---

# CampaignGameMode

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** public enum CampaignGameMode
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignGameMode.cs

## 概述

`CampaignGameMode` 是标记当前战役处于哪种运行模式的枚举：标准战役（`Campaign`）、教程/开发（`Tutorial`）或无模式（`None`）。它由 `Campaign` 在创建时一次性写入，运行期只能经 `Campaign.Current.GameMode` 只读读取，并作为“当前处于哪种玩法上下文”的总开关，驱动存档许可、模型启用与大量界面/行为分支。

## 心智模型

`CampaignGameMode` 不是一个规则模型，而是一个由 `Campaign` 在构造 `new Campaign(CampaignGameMode)` 时一次性固定、之后运行期只读的模式枚举。整个引擎把它当成“当前处于哪种玩法上下文”的总开关：`Campaign` 在启动时把传入值存进 `GameMode` 属性（setter 为 private，见 `Campaign.cs:379` 与 `Campaign.cs:562`），此后所有系统都通过 `Campaign.Current.GameMode` 读取它来决定分支——只有 `Campaign` 模式才 `SupportsSaving` 并启用完整模型集合（`GameModels.cs:259`），`Tutorial` 模式则开放任务内背包/队伍窗口并标记开发态，而大量 Mission/UI 代码用 `(int)GameMode == 1/2` 做守卫。要“改变模式”只能重新构造 `Campaign`，绝不要在运行期试图反射改写它，也不要把它当成持久世界状态去读写；它只是一个无状态的枚举常量，真正的世界状态在 `Hero`/`Settlement`/`MobileParty` 等对象上。

## 何时使用 / 何时不要使用

- **使用**：需要在代码里区分“当前是标准战役还是教程/开发模式”时，读取 `Campaign.Current.GameMode` 并与具名常量 `CampaignGameMode.Campaign` / `CampaignGameMode.Tutorial` 比较（正如 `SandBoxManager`、`GameModels`、`LocationCharacter` 所做的那样）；若需要让新战役以特定模式启动，就在创建 `Campaign` 时传入对应的 `CampaignGameMode`（沙盒启动传 `(CampaignGameMode)1`，编辑器/教程场景传 `(CampaignGameMode)2`）。
- **不要使用**：不要试图在运行期改写 `GameMode`（setter 为私有，强行改会破坏 `SupportsSaving`/开发判定与世界一致性）；不要用整型魔数 `== 1/2/0` 代替具名常量，否则枚举一旦重排所有整型比较都会错位；不要假设教程模式支持存档（`SupportsSaving` 仅 `Campaign` 为真）；不要把它当作任何世界状态的容器——它只是模式标记，真正的状态在 `Hero` / `Settlement` / `MobileParty` 上。

## 依赖图

上游（谁持有与设置它）：

- [Campaign](../Campaign) —— 唯一持有者；`Campaign.cs:379` 声明 `public CampaignGameMode GameMode { get; private set; }`，并在 `Campaign.cs:562` 构造函数中由传入的 `CampaignGameMode` 一次性写入，运行期不可更改。
- [GameModels](../GameModels) —— `GameModels.cs:259` 读取 `Campaign.Current.GameMode`，仅在 `Campaign` 或 `Tutorial` 模式下构建/启用模型集合。
- [SandBoxManager](../SandBoxManager) —— `SandBoxManager.cs:344/367/378` 以 `Campaign.Current.GameMode` 区分“是否可存档”与教程相关逻辑。

下游与协同系统（谁读取它做分支）：

- [LocationCharacter](../LocationCharacter) —— `LocationCharacter.cs:59` 仅当 `GameMode == CampaignGameMode.Campaign` 时才走大地图位置逻辑。
- [MapWeatherModel](../MapWeatherModel) —— 大地图天气氛围（`GetAtmosphereModel`）仅在 `Campaign` 模式下才会被 `StoryModeMissions` / `SandBoxMissions` 读取。
- UI 层（跨目录真实调用方）：
  - [GameMenuVM](../../viewmodel/GameMenuVM) —— `GameMenuVM.cs:508` 仅 `Campaign` 模式渲染对应菜单。
  - [CraftingVM](../../viewmodel/CraftingVM) —— `CraftingVM.cs:746/965/1154` 按 `Campaign` / `Tutorial` 切换锻造界面行为。
  - [WeaponDesignVM](../../viewmodel/WeaponDesignVM) —— `WeaponDesignVM.cs:1623/2054` 按模式决定是否进入教程锻造流程。
  - [SPInventoryVM](../../viewmodel/SPInventoryVM) —— `SPInventoryVM.cs:4010` 仅在 `Campaign` 模式开放背包相关项。
  - [ItemMenuVM](../../viewmodel/ItemMenuVM) —— `ItemMenuVM.cs:754` 在 `Campaign` 模式才接入交易传闻行为。

## 风险

- **运行期只读、构造时固定**：`GameMode` 的 setter 是 private，只能在 `new Campaign(CampaignGameMode)` 时设定，之后 `Campaign.Current.GameMode` 不可改。试图通过反射或持有旧 `Campaign` 实例来“切换模式”，会让世界状态与模式不一致，并与 `SupportsSaving` / `IsDevelopment` 等派生判定脱节。
- **`Campaign.Current` 为空**：在主菜单、子模块加载早期或编辑器尚未开战役时，`Campaign.Current` 为 `null`，直接读取 `Campaign.Current.GameMode` 会空引用崩溃。
- **只有 Campaign 模式可存档**：`SupportsSaving => GameMode == CampaignGameMode.Campaign`（`Campaign.cs:224`）。在 `Tutorial` 模式下调用任何存档/读档 API 会被拒绝或不持久化；不要假设教程/开发模式存档可用。
- **Tutorial 模式的界面特权**：`IsInventoryAccessibleAtMission` / `IsPartyWindowAccessibleAtMission` 仅在 `Tutorial` 为 `true`（`Campaign.cs:269/544`）。把依赖这些窗口的逻辑放到 `Campaign` 模式，会打不开界面。
- **误判枚举数值**：源码大量使用 `(int)Campaign.Current.GameMode == 1`（`Campaign`）与 `== 2`（`Tutorial`）、`0` 即 `None`。若自定义扩展时重排枚举值或新增成员，所有整型比较的现有代码会错位；始终用具名常量 `CampaignGameMode.Campaign` / `CampaignGameMode.Tutorial` 比较。
- **跨战役缓存陈旧模式**：`Campaign.Current.GameMode` 随每次新战役/读档由构造函数重置；把读取结果或“当前模式”缓存进静态字段，重载后会读到陈旧模式，触发错误的分支。

## 成员说明

### 枚举成员（模式值）

- **`None`**（= 0）
  - 用途：表示尚未进入任何战役模式（主菜单、未启动战役等）。引擎在构造 `Campaign` 时不会以该值作为运行模式。
  - 副作用：无，它是纯粹的常量标记。
  - 调用时机：由 `Campaign.Current.GameMode` 返回；当 `GameMode == CampaignGameMode.None` 时，UI 与行为应按“无战役”处理（多数读取方默认不在此分支内做事）。

- **`Campaign`**（= 1）
  - 用途：标准战役模式——沙盒/故事模式的大地图玩法。由 `SandBoxViewSubModule.cs:282`（`new Campaign((CampaignGameMode)1)`）与 `StoryModeViewSubModule.cs:32`（`new CampaignStoryMode((CampaignGameMode)1)`）在启动战役时传入。
  - 副作用：无直接写入，但它是 `Campaign.SupportsSaving`、`GameModels` 模型启用、`LocationCharacter` 与各类 UI 分支的总开关。
  - 调用时机：战役正式运行期间 `Campaign.Current.GameMode` 持续为 `Campaign`；存档、大地图推进、天气氛围读取都以此值守卫。

- **`Tutorial`**（= 2）
  - 用途：教程/开发模式。由 `EditorSceneMissionManager.cs:64`（`new Campaign((CampaignGameMode)2)`）等编辑器/教程入口传入，允许任务内打开背包与队伍窗口，并标记 `IsDevelopment`。
  - 副作用：无直接写入，但开启 `IsInventoryAccessibleAtMission`、`IsPartyWindowAccessibleAtMission`、`IsDevelopment` 等派生判定。
  - 调用时机：进入教程/编辑场景时 `GameMode` 为 `Tutorial`；锻造 UI（`WeaponDesignVM` / `CraftingVM`）据此切换到教程流程。

### 由本枚举驱动的 Campaign 派生判定

- **`SupportsSaving`**（属性，返回 `bool`）
  - 用途：`Campaign.cs:224` 定义为 `GameMode == CampaignGameMode.Campaign`。只有标准战役模式支持存档。
  - 副作用：无。
  - 调用时机：`SandBoxManager.cs:344` 在保存前校验；任何存档入口都会经此判定。

- **`IsDevelopment`**（属性，返回 `bool`）
  - 用途：`Campaign.cs:229` 定义为 `GameMode == CampaignGameMode.Tutorial`，标记开发/教程模式。
  - 副作用：无。
  - 调用时机：编辑器与开发工具链据此放宽限制。

- **`IsInventoryAccessibleAtMission`**（属性，返回 `bool`）
  - 用途：`Campaign.cs:269` 定义为 `GameMode == CampaignGameMode.Tutorial`。
  - 副作用：无。
  - 调用时机：任务内背包是否可打开由此判定。

- **`IsPartyWindowAccessibleAtMission`**（属性，返回 `bool`）
  - 用途：`Campaign.cs:544` 定义为 `GameMode == CampaignGameMode.Tutorial`。
  - 副作用：无。
  - 调用时机：任务内队伍窗口是否可打开由此判定。

## 示例

在行为逻辑里按当前模式做分支（真实读取路径为 `Campaign.Current.GameMode`，与 `LocationCharacter.cs:59`、`SandBoxManager.cs:344` 一致）：

```csharp
// 任务/大地图逻辑中，仅在标准战役模式下走大地图分支
if (Campaign.Current.GameMode == CampaignGameMode.Campaign)
{
    // 标准战役：允许存档、启用全部游戏模型、推进大地图
    bool canSave = Campaign.Current.SupportsSaving;        // => true
    Settlement settlement = Settlement.CurrentSettlement;  // 当前所在定居点
    CultureObject culture = settlement.MapFaction.Culture; // 用大地图派系文化
}
else if (Campaign.Current.GameMode == CampaignGameMode.Tutorial)
{
    // 教程/开发模式：开放任务内背包与队伍窗口，但不支持存档
    bool inventoryAllowed = Campaign.Current.IsInventoryAccessibleAtMission; // => true
    bool devMode = Campaign.Current.IsDevelopment;                            // => true
}
```

在模型初始化处按模式决定启用范围（取自 `GameModels.cs:259` 的真实判断）：

```csharp
// 仅当处于标准战役或教程模式时，模型集合才被构建/启用
if (Campaign.Current.GameMode == CampaignGameMode.Campaign
    || Campaign.Current.GameMode == CampaignGameMode.Tutorial)
{
    // 此时 Campaign.Current.Models 下的各规则模型已就绪，可安全读取
    MapWeatherModel weather = Campaign.Current.Models.MapWeatherModel;
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [SandBoxManager](../SandBoxManager) · [LocationCharacter](../LocationCharacter) · [MapWeatherModel](../MapWeatherModel) · [GameMenuVM](../../viewmodel/GameMenuVM) · [CraftingVM](../../viewmodel/CraftingVM) · [WeaponDesignVM](../../viewmodel/WeaponDesignVM) · [SPInventoryVM](../../viewmodel/SPInventoryVM) · [ItemMenuVM](../../viewmodel/ItemMenuVM)

---
title: "BuildingModel"
description: "决定某个定居点（城镇或城堡）在开局时允许解锁哪些建筑类型的可替换规则模型。"
---
# BuildingModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class BuildingModel : MBGameModel<BuildingModel>`  
**基类:** `MBGameModel<BuildingModel>`  
**源文件:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\BuildingModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingModel.cs`

## 一句话职责

它回答“这个 `Town` 应该允许出现哪些 `BuildingType`”，只做一次性资格判定，不参与建筑进度推进、不花费金币、也不把建筑入队。游戏的城镇面板、建造队列与经济模型把这个判定当作该定居点可用建筑清单的来源，因此替换它会改变所有城镇开局能看到的建筑，而不是某一次 UI 上的临时开关。

## 心智模型

这是一个在战役初始化阶段被查询一次的“资格闸门”模型，而不是每 tick 都参与的计算模型。整局游戏里它唯一公开的方法是 `CanAddBuildingTypeToTown(BuildingType, Town)`，返回一个 `bool`，告诉 `BuildingsCampaignBehavior` 在为新定居点铺设初始建筑时，某个 `BuildingType` 是否该出现在这个 `Town` 上。

调用链是：战役创建时 `OnNewGameCreated` 触发 `BuildDevelopmentsAtGameStart`，遍历 `Settlement.All` 中每一个要塞（`IsFortification`），取出它的 `Town`，再遍历 `BuildingType.All`；对每个尚未拥有的 `BuildingType`，只要 `Campaign.Current.Models.BuildingModel.CanAddBuildingTypeToTown(buildingType, town)` 返回 `true`，就 `new Building(...)` 加进 `town.Buildings`。也就是说，这个模型只在“第一次给定居点生成建筑清单”时被读取一次，之后玩家在城镇面板里升级、排队、建造，都不再回头问它。

默认实现 `DefaultBuildingModel` 的判定逻辑纯粹基于 `town.IsTown` / `town.IsCastle` 与 `DefaultBuildingTypes` 里的常量分组：城镇类建筑（要塞、兵营、训练场、守卫室、攻城工坊、税务局、集市、仓库、石匠、供水、法院、道路）要求 `town.IsTown`；城堡类建筑（城堡要塞、城堡兵营、城堡训练场、守卫室、攻城工坊、城主办公室、粮仓、工匠居所、农田、石匠、道路）要求 `town.IsCastle`；日项目（城镇的每日住房、每日民兵训练、每日节庆、每日灌溉；城堡的每日松弛驻军、每日募兵、每日演练、每日灌溉）同样按城镇/城堡区分；其余任何不在上述清单里的 `BuildingType` 一律返回 `true`。这意味着：如果你用模组新增了一个自定义 `BuildingType`，只要它不在 `DefaultBuildingTypes` 的硬编码分支里，默认模型会允许它出现在所有定居点——你得在自定义模型里显式拒绝，才不会让它到处出现。

使用这个模型，是为了改变“某个定居点开局能解锁哪些建筑”。如果目标是推进建筑进度、扣建造资源、把建筑入队或升满级，应该走 `BuildingConstructionModel`、`BuildingScoreCalculationModel`、`BuildingHelper` 或对应的行为，而不是在这个只读查询里改世界状态。不要在 `CanAddBuildingTypeToTown` 里写 `town.Buildings.Add`、`BuildingHelper.ChangeDefaultBuilding` 或任何会改定居点状态的代码——它可能在 `OnNewGameCreated` 期间被反复调用，把一次性闸门变成重复副作用。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例 `DefaultBuildingModel` 在战役初始化时经由 `GameModels` 注册（`BuildingModel = GetGameModel<BuildingModel>()`），自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Town`](../../campaign/Town) | 提供 `IsTown` / `IsCastle`，是资格判定的唯一输入之一。 |
| [`BuildingType`](../BuildingType) | 被查询的建筑类型；默认实现按 `DefaultBuildingTypes` 常量分组判断。 |
| [`DefaultBuildingTypes`](../DefaultBuildingTypes) | 城镇 / 城堡 / 日项目建筑类型的常量集合，决定默认模型的分支。 |
| [`Settlement`](../../campaign/Settlement) | 要塞（`IsFortification`）在初始化时通过 `Settlement.All` 被遍历，再取出其 `Town`。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | 在 `BuildDevelopmentsAtGameStart` 中调用本模型为定居点铺设初始建筑。 |
| [`Building`](../Building) | 判定通过后被 `new Building(...)` 加入 `town.Buildings` 的具体建筑实例。 |
| [`BuildingScoreCalculationModel`](../BuildingScoreCalculationModel) | 相邻规则模型；负责每日选择下一个要建造 / 推进的建筑，不负责本模型的资格判定。 |
| [`BuildingConstructionModel`](../BuildingConstructionModel) | 相邻规则模型；负责建筑花费与进度推进，本模型不触碰这些。 |

### Action、事件与存档边界

本模型自身不派发事件、不持有存档字段；它只在 `OnNewGameCreated` 被同步调用一次。`BuildingsCampaignBehavior` 的 `DailyTickSettlement`、`OnBuildingLevelChanged` 等后续 tick 都不回到本模型重新判定。合法的建筑进度、队列和升级走 `BuildingHelper`、对应的 `*Action` 与行为；替换模型时应在相同输入下保持确定性，避免不同战役间初始建筑清单不一致。

## 成员契约

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CanAddBuildingTypeToTown(BuildingType buildingType, Town town)` | 判定给定建筑类型是否允许出现在指定城镇 / 城堡的初始建筑清单中；默认实现按 `town` 是城镇还是城堡，以及 `buildingType` 是否属于 `DefaultBuildingTypes` 的城镇 / 城堡 / 日项目分组返回。 | 仅在战役创建时为每个要塞调用一次（`BuildDevelopmentsAtGameStart`）；纯只读，无副作用，不应修改 `town` 或 `Building` 状态。 |

默认实现的可观察行为：城镇专属建筑只在 `town.IsTown` 时允许；城堡专属建筑只在 `town.IsCastle` 时允许；日项目同样按城镇 / 城堡区分；任何未列在 `DefaultBuildingTypes` 硬编码分支中的自定义 `BuildingType` 默认返回 `true`（对所有定居点开放）。v1.3.15 与 v1.4.5 的默认 `BuildingModel` 接口与这一判定逻辑一致，跨版本替换时优先委托当前版本的 vanilla 模型，再叠加你自己的闸门规则。

## 真实读取路径

以下代码复刻了 `BuildingsCampaignBehavior.BuildDevelopmentsAtGameStart` 的查询方式，只读取当前战役中已经注册的模型，并列出某个 `Town` 当前还允许加入的建筑类型：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using System.Collections.Generic;

public List<BuildingType> GetAllowedBuildingsForTown(Town town)
{
    var allowed = new List<BuildingType>();
    if (Campaign.Current == null || town == null)
    {
        return allowed;
    }

    BuildingModel model = Campaign.Current.Models.BuildingModel;
    foreach (BuildingType type in BuildingType.All)
    {
        bool notYetOwned = town.Buildings.All(b => b.BuildingType != type);
        if (notYetOwned && model.CanAddBuildingTypeToTown(type, town))
        {
            allowed.Add(type);
        }
    }
    return allowed;
}
```

这段结果适合在调试或自定义面板里预览“该城镇还能解锁什么”；普通游戏逻辑不应在每 tick 自己重跑这个列表，初始建筑清单在 `OnNewGameCreated` 之后就已经定型。

## 替换模型时的安全做法

如果只是想放宽某一类建筑的定居点限制，保留原模型作为 delegate，让判定仍然委托回去：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public sealed class ModBuildingModel : BuildingModel
{
    private readonly BuildingModel _vanilla;

    public ModBuildingModel(BuildingModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)
    {
        // 让所有城镇也能建造原本仅城堡可用的训练场
        if (buildingType == DefaultBuildingTypes.CastleTrainingFields && town.IsTown)
        {
            return true;
        }
        return _vanilla.CanAddBuildingTypeToTown(buildingType, town);
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate（例如在你的 `MBSubModuleBase` 钩子里通过 `GameModels` 拿到默认实例再包一层）；不要在模型已经替换后再次通过 `Campaign.Current.Models.BuildingModel` 查找自己，否则会递归。注意：因为本模型只在 `OnNewGameCreated` 被调用一次，替换模型只会影响**之后新开战役**的初始建筑清单，已经进行中的战役不会自动重铺已有城镇的建筑。

## 风险与调试顺序

1. **只在开局查询一次:** `CanAddBuildingTypeToTown` 仅在 `OnNewGameCreated` 时由 `BuildDevelopmentsAtGameStart` 调用；中途替换模型不会让已有城镇重新出现 / 消失建筑，必须开新档才会见效。
2. **返回 false 即移除资格:** 一旦某 `BuildingType` 对某 `Town` 返回 `false`，该定居点开局就不会拥有这个建筑；调试“为什么某城没有某建筑”时先查这里。
3. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型，不要在静态字段或菜单构造里无条件读取。
4. **查询中修改世界:** `town.Buildings.Add`、`BuildingHelper.ChangeDefaultBuilding`、入队或升级都必须在行为 / `BuildingHelper` / 对应 `*Action` 中执行，不能放进这个只读判定回调。
5. **自定义建筑默认全开:** 新增的 `BuildingType` 不在 `DefaultBuildingTypes` 硬编码分支中，默认实现会返回 `true`；要在特定定居点禁用它，必须在自定义模型里显式 `return false`。

## 版本与导航

v1.3.15 与 v1.4.5 的 `BuildingModel` 接口都只有 `CanAddBuildingTypeToTown(BuildingType, Town)`，默认实现的分组判定逻辑一致；跨版本实现应委托当前版本的 vanilla 模型，而不是把旧分支复制到新版本。本模型位于 Campaign 层，与 `BuildingScoreCalculationModel`、`BuildingConstructionModel` 共同构成定居点建筑系统，但只有本模型负责“开局资格”，其余两者负责“每日选择与进度”。

- [父级：Campaign 扩展 API](../)
- [本区域模型目录](../models/)
- [↔ DefaultBuildingModel](../DefaultBuildingModel)
- [↔ BuildingScoreCalculationModel](../BuildingScoreCalculationModel)
- [↔ BuildingConstructionModel](../BuildingConstructionModel)
- [↔ WorkshopModel](../WorkshopModel)
- [Town](../../campaign/Town)
- [BuildingType](../BuildingType)
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
- [战役系统指南](../../../guide/campaign-system)

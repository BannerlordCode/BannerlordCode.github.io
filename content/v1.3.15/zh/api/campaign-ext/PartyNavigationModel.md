---
title: "PartyNavigationModel"
description: "决定队伍导航类型、可通行地形和玩家目标是否合法的战役导航策略。"
---
# PartyNavigationModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`  
**基类:** `MBGameModel<PartyNavigationModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyNavigationModel.cs`

## 一句话职责

它定义“这支队伍能否按某种导航类型通过某块地形，以及玩家点选的目标是否可达”；它不计算速度、不移动队伍，也不负责把队伍送上船。地图 AI 和玩家目标检查都可能调用它，因此返回的地形规则必须和真实地图能力保持一致。

## 心智模型

把它放在地图寻路的可行性层，而不是移动执行层。`MobileParty`、地图寻路辅助类和 AI 行为先从 `Campaign.Current.Models.PartyNavigationModel` 取得无效地形集合，再决定导航目标；真正的位移仍由队伍和地图模拟完成。默认实现只有陆地导航规则：`Default` 和 `All` 使用构造时从 `TerrainType` 枚举缓存的无效数组，其他导航类型默认返回“不支持”。

```text
目标 CampaignVec2 / 当前位置 / NavigationType
                    |
                    v
Campaign.Current.Models.PartyNavigationModel
                    |
     +--------------+---------------+
     v                              v
可通行地形 / 无效地形数组       玩家目标前置条件
     |                              |
     +--> MobileParty / 地图 AI / 海上返陆行为
```

默认模型的 `CanPlayerNavigateToPosition` 要求目标 Face 有效、玩家当前在陆地、目标在陆地，并且目标 Face 的 `FaceGroupIndex` 不在默认无效数组中；它会把输出导航类型设为 `Default`。`HasNavalNavigationCapability` 默认始终为 `false`，所以有船的队伍并不会因为实现了这个模型就自动获得海军能力。需要传送或启动登船流程时，应使用专门的队伍/地图流程，不要从模型内部改位置。

### 生命周期与注册

实例由 `Campaign.Current.Models` 持有，默认类型是 `DefaultPartyNavigationModel`。默认模型在构造时遍历 `TerrainType`，把非 Plain、Desert、Snow、Forest、Steppe、Swamp、Dune、Bridge、Fording、Beach 的值缓存为无效数组；因此返回数组是规则快照，不是每次查询重新计算的寻路路径。自定义实现必须在地图 AI 开始查询前注册，并避免在没有战役或 `MobileParty.MainParty` 尚未建立时调用玩家目标检查。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有注册模型、地图场景包装器和当前地图状态。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供 `MainParty.Position`、当前导航面和 `NavigationType`。 |
| `CampaignVec2` / `TerrainType` | 提供目标面、陆地状态和地形枚举。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| `AIMoveToNearestLandBehavior` | 海上且有陆地导航能力时，用 `All` 导航类型的无效面数组找返陆路径。 |
| [`MobileParty`](../../campaign/MobileParty) | 在离开海上、修正导航面和地图更新时读取无效地形。 |
| [`PartySpeedModel`](../PartySpeedModel) | 计算能走多快；导航模型只回答能不能走。 |
| [`Settlement`](../../campaign/Settlement) | AI 可能以据点作为导航目标，但据点移动/进入流程不由本模型执行。 |

### Action、事件与存档边界

模型没有存档字段，也不派发登船、进入据点或位置改变事件。目标合法性检查可以被高频调用，必须无副作用；需要改变队伍位置或导航状态时，沿用 `MobileParty` 和地图系统的 API/行为，避免把状态写入规则查询。

## 成员契约

| 成员 | 用途 | 默认实现与调用时机 |
| --- | --- | --- |
| `CanPlayerNavigateToPosition(CampaignVec2, out NavigationType)` | 检查玩家当前位置和目标面是否满足玩家导航前置条件，并输出导航类型。 | 默认输出 `Default`；要求当前/目标在陆地、Face 有效且目标不在无效数组。 |
| `GetEmbarkDisembarkThresholdDistance()` | 提供登船/离船阈值距离。 | 默认 `0f`；它是距离规则，不会自己执行登船。 |
| `IsTerrainTypeValidForNavigationType(TerrainType, NavigationType)` | 判断给定地形对导航类型是否有效。 | 默认仅 `Default`/`All` 接受默认陆地地形，其他类型返回 `false`。 |
| `GetInvalidTerrainTypesForNavigationType(NavigationType)` | 返回寻路器需要排除的 `TerrainType` 整数数组。 | 默认 `Default`/`All` 返回缓存数组，其他类型返回空数组；调用者不应修改共享数组。 |
| `HasNavalNavigationCapability(MobileParty)` | 判断队伍是否具备海军导航能力。 | 默认始终 `false`；不等同于队伍拥有船或当前在海上。 |

## 真实读取路径

### 检查玩家目标

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public bool CanPlayerSelect(CampaignVec2 target, out MobileParty.NavigationType navigationType)
{
    navigationType = MobileParty.NavigationType.Default;
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return false;
    }

    PartyNavigationModel model = Campaign.Current.Models.PartyNavigationModel;
    return model.CanPlayerNavigateToPosition(target, out navigationType);
}
```

### 给寻路器提供无效面

海上返陆行为的真实消费路径使用 `All`：

```csharp
PartyNavigationModel model = Campaign.Current.Models.PartyNavigationModel;
int[] invalidFaces = model.GetInvalidTerrainTypesForNavigationType(
    MobileParty.NavigationType.All);
CampaignVec2 landTarget = Campaign.Current.MapSceneWrapper
    .GetNearestFaceCenterForPositionWithPath(
        party.CurrentNavigationFace, true, Campaign.MapDiagonal / 2f, invalidFaces);
```

这里的数组用于排除地形面，不是目标位置本身，也不是速度倍率。不要把 `GetInvalidTerrainTypesForNavigationType` 的返回值当成可写集合；默认实现可能返回内部缓存数组。

## 自定义规则的边界

如果要开放一类自定义地形，必须同时考虑 `IsTerrainTypeValidForNavigationType`、`GetInvalidTerrainTypesForNavigationType`、玩家目标检查和 AI 返陆行为的语义。只改其中一个入口会造成“点击时可达、AI 寻路时不可达”或相反的分裂状态。若要加入海上能力，还需要和队伍的船、海上移动、登离船距离以及速度模型一起设计；单独让 `HasNavalNavigationCapability` 返回 `true` 不会创建船或路径。

## 风险与调试顺序

1. **空战役或空主队:** 默认玩家检查直接依赖 `Campaign.Current` 和 `MobileParty.MainParty`；在标题界面或初始化早期调用可能崩溃。
2. **只改一个契约:** 无效数组、单点地形判断和玩家目标检查不一致，会让地图 AI 与玩家 UI 得到相反结论。
3. **共享数组被修改:** 默认 `Default`/`All` 返回构造时缓存的数组；不要排序、追加或清空它。
4. **把合法性当移动:** Model 不会传送、登船或进入据点；状态改变必须走队伍、地图、事件和 Action 流程。
5. **误判海军能力:** 默认 `false` 是能力策略，不是当前是否在水上；海上队伍返陆还会依赖 `AIMoveToNearestLandBehavior` 和 `All` 的无效面集合。

## 版本与导航

v1.3.15 和 v1.4.5 的五个公开入口与默认陆地规则一致；v1.4.5 的源代码仍明确将海军能力默认设为 `false`。如果 mod 目标是海上导航，应以目标版本的完整海上系统为依赖，不要只复制本页的陆地默认实现。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [MobileParty](../../campaign/MobileParty)
- [AIMoveToNearestLandBehavior](../../campaign/AIMoveToNearestLandBehavior/)
- [Settlement](../../campaign/Settlement)

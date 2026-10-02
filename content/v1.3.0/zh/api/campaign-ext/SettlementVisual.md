---
title: "SettlementVisual"
description: "聚落的地图场景对象：战略 GameEntity、悬停、点击、百科、攻城器械帧与旗帜位置。"
---

# SettlementVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class SettlementVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`（→ `MapEntityVisual`）
**File:** `SandBox.View/Map/Visuals/SettlementVisual.cs`

## 概述

`SettlementVisual` 是一个 [Settlement](../../campaign/Settlement) 的**地图场景**那一半。战役对象持有数据（所有者、守备军、城墙、繁荣度），视觉对象持有被渲染的 `GameEntity`、悬停与点击行为，以及攻城与旗帜系统所需的定位锚点。

它处在两层的基类链中：

```
MapEntityVisual                 （抽象，非泛型）
 └─ MapEntityVisual<T>          （public T MapEntity）
      └─ SettlementVisual       （MapEntity 是守备军 PartyBase，而非 Settlement 本身）
```

泛型参数正是为什么聚落视觉挂在**守备军** `PartyBase` 上，而不是挂在 `Settlement` 上。`Settlement.Party` 正是那支守备军，而驱动聚落视觉规模与颜色的是它的名册。

`SettlementVisual` 还承载预先计算好的攻城几何数据（`GetAttackerTowerSiegeEngineFrames`、`GetBreachableWallFrames` 等），攻城场景据此摆放器械。

## 心智模型

```
Settlement（战役数据）
 └─ Party (PartyBase, IsSettlement)  ──► MapEntityVisual<PartyBase>.MapEntity
        │
SettlementVisual
 ├─ StrategicEntity : GameEntity        被渲染的场景对象
 ├─ OnHover / OnMapClick / OnOpenEncyclopedia
 ├─ IsEnemyOf / IsAllyOf (IFaction)     名牌配色
 ├─ IsVisibleOrFadingOut()
 └─ 攻城帧：塔楼、撞锤、远程器械、可破城墙
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    战役数据已存在；尚无视觉对象
地图界面激活（MapScreen 创建 MapScene）
    new SettlementVisual(settlement.Party)
    由聚落网格构建 StrategicEntity
每帧
    GetVisualPosition() / IsVisibleOrFadingOut() 驱动摆放与剔除
用户输入
    OnHover() → OnMapClick(followModifierUsed) → OnOpenEncyclopedia()
拆卸
    ReleaseResources()
```

实际开发中最容易踩的坑：

- **只有地图界面存在时视觉对象才存在。** `MapEntityVisual.MapScreen` 返回 `MapScreen.Instance`，在战役地图之外它是 `null`。任何触及 `MapScreen` 或 `StrategicEntity` 的成员都只在地图界面期间有效。
- **构造函数接收的是 `PartyBase`，不是 `Settlement`。** 正确调用是 `new SettlementVisual(settlement.Party)`。传一个机动部队的 `PartyBase` 能编译，但会渲染出毫无意义的东西。
- **`ReleaseResources()` 会释放 `GameEntity`。** 调用之后再读 `StrategicEntity`，面对的是已释放的原生对象，会原生崩溃而不是抛出托管异常。
- **`IsEnemyOf` / `IsAllyOf` 决定颜色，不决定逻辑。** 它们是对 `MapEntity.MapFaction` 的廉价视觉查询；不要拿它们替代 `FactionManager.IsAtWarAgainstFaction`。
- **`AttachedTo` 恒为 null。** 聚落不依附于任何东西，这与 [MobilePartyVisual](../MobilePartyVisual)（其附属部队返回宿主视觉）不同。在把它当作有意义的信息之前先判空。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 基类 | `MapEntityVisual<PartyBase>` → `MapEntityVisual` | `MapEntity` 是守备军 `PartyBase` |
| 战役 | [Settlement](../../campaign/Settlement)、[PartyBase](../../campaign/PartyBase) | 该视觉所渲染的数据 |
| 政治 | `IFaction`、[FactionManager](../../campaign/FactionManager) | `IsEnemyOf` / `IsAllyOf` |
| 引擎 | `GameEntity`、`MatrixFrame`、`Vec3` | 场景对象与锚点 |
| 兄弟页 | [MobilePartyVisual](../MobilePartyVisual) | 另一个地图实体视觉 |
| 界面 | `MapScreen`、`MapScene` | 生命周期归属者；离开地图即为 null |

## 主要成员

### 锚点

#### `public SettlementVisual(PartyBase entity) : base(entity)`

唯一的构造函数。传 `settlement.Party`。基类把它存为 `MapEntity`。

#### `public override CampaignVec2 InteractionPositionForPlayer`

“在此交互”的提示落点，通常相对聚落中心做偏移，以免与图标重叠。

#### `public override MapEntityVisual AttachedTo`

聚落恒为 `null`。该重写只是为了满足基类契约。

### 场景对象

#### `public GameEntity StrategicEntity { get; private set; }`

渲染出的聚落。只在地图界面激活到 `ReleaseResources()` 之间有效。

#### `public override Vec3 GetVisualPosition()`

用于摆放与名牌定位的世界空间坐标。

#### `public override bool IsVisibleOrFadingOut()`

剔除判定。返回 `false` 时场景可以完全跳过该实体。

#### `public void ReleaseResources()`

释放场景对象。此后 `StrategicEntity` 即为无效。

### 交互

#### `public override void OnHover()` / `public override bool OnMapClick(bool followModifierUsed)` / `public override void OnOpenEncyclopedia()` / `public override void OnTrackAction()`

来自地图界面的输入回调。`followModifierUsed` 用于区分普通点击与追踪 / 跟随点击。

### 政治

#### `public override bool IsEnemyOf(IFaction faction)` / `public override bool IsAllyOf(IFaction faction)`

名牌与边界配色。由守备军的派系推导。

### 攻城几何

#### `public MatrixFrame[] GetAttackerTowerSiegeEngineFrames()` / `GetAttackerBatteringRamSiegeEngineFrames()` / `GetAttackerRangedSiegeEngineFrames()` / `GetDefenderRangedSiegeEngineFrames()` / `public MatrixFrame[] GetBreachableWallFrames()`

为攻城场景预置的世界锚点。没有对应结构的聚落（村庄没有城墙、城镇没有塔楼）会返回空数组。

#### `public Vec3 GetBannerPositionForParty(MobileParty mobileParty)`

附近部队的旗帜相对该聚落的摆放位置。由地图场景在聚落附近显示部队标记时使用。

## 使用示例

### 示例 1：找到聚落的视觉对象并读取其场景对象

```csharp
using System.Linq;
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;

public static Vec3? SettlementScenePosition(Settlement settlement)
{
    if (settlement?.Party == null || MapScreen.Instance == null)
    {
        return null;
    }

    // 视觉生命周期受地图界面约束；绝不要跨界面缓存。
    SettlementVisual visual = MapScreen.VisualsOfEntities.Values
        .OfType<SettlementVisual>()
        .FirstOrDefault(v => ReferenceEquals(v.MapEntity, settlement.Party));

    return visual?.GetVisualPosition();
}
```

### 示例 2：按外交关系给聚落名牌配色

```csharp
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static string SettlementRelationToPlayer(Settlement settlement)
{
    if (settlement?.Party == null || Campaign.Current == null)
    {
        return "未知";
    }

    IFaction playerFaction = Campaign.Current.MainParty?.ActualClan;
    if (playerFaction == null)
    {
        return "无玩家派系";
    }

    IFaction owner = settlement.MapFaction;
    if (FactionManager.IsAtWarAgainstFaction(playerFaction, owner))
    {
        return "敌对";
    }

    return owner == playerFaction ? "友好" : "中立";
}
```

### 示例 3：询问攻城场景是否有可破坏点

```csharp
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;

public static int BreachPointCount(Settlement settlement)
{
    if (settlement == null || !settlement.IsFortification || MapScreen.Instance == null)
    {
        return 0;
    }

    SettlementVisual visual = null;
    foreach (MapEntityVisual candidate in MapScreen.VisualsOfEntities.Values)
    {
        if (candidate is SettlementVisual settlementVisual &&
            ReferenceEquals(settlementVisual.MapEntity, settlement.Party))
        {
            visual = settlementVisual;
            break;
        }
    }

    MatrixFrame[] frames = visual?.GetBreachableWallFrames();
    return frames?.Length ?? 0;
}
```

### 示例 4：替换视觉对象时显式释放

```csharp
using SandBox.View.Map.Visuals;

public static void RetireVisual(SettlementVisual visual)
{
    if (visual == null)
    {
        return;
    }

    // 在地图界面仍然存活时释放 GameEntity；之后不得再访问 StrategicEntity。
    visual.ReleaseResources();
}
```

## 风险与崩溃边界

1. **离开地图界面后 `MapScreen.Instance` 为 null。** 所有触及场景的成员都假设它存在。在菜单、任务或加载界面触碰 `StrategicEntity`、`MapScreen` 或攻城帧之前必须判空。
2. **构造函数参数类型造成的编译期误用。** 参数是 `PartyBase`，聚落守备军能编译，但会渲染出一个没有角色的图标。调试时请检查 `IsSettlement`。
3. **`ReleaseResources()` 会让 `StrategicEntity` 失效。** 之后读该属性会访问已释放的原生对象。绝不要跨地图界面拆卸持有视觉对象。
4. **场景生命周期，而不是战役生命周期。** 视觉对象随地图界面创建与销毁，而不是随战役。静态字段或 mod 单例里缓存的视觉对象，在下一次界面切换后就是悬垂引用。
5. **攻城帧数组可能为空。** 村庄与城镇缺少城墙与塔楼；对应 getter 返回空数组而非 null。请用 `?.Length ?? 0` 防御，而不是只判 null。
6. **`VisualsOfEntities` 枚举成本。** 每帧用 LINQ 过滤视觉列表会产生分配。请在地图界面激活时缓存一次列表，并在聚落创建时刷新。
7. **跨域依赖。** 该类位于 `SandBox.View` 这个视图模块。战役逻辑不应依赖它，否则任务与加载上下文也会被迫加载视图程序集。
8. **玩家数据泄露。** `MapEntity` 是守备军 `PartyBase`；为玩家尚未侦察的聚落读取其名册，等于绕过战争迷雾模型。

## 跨版本提示

- 基类链、构造函数形状与攻城帧 getter 在 1.3.x 与 1.4.x 中未变。
- 后续构建增加了港口海军锚点与更多攻城几何。由于消费方都按数组长度做防御，这些新增是源码兼容的；请按“可能为空”而不是“长度固定”来防御。

## 参见

- [Settlement](../../campaign/Settlement) — 该视觉所渲染的战役数据
- [PartyBase](../../campaign/PartyBase) — `MapEntity` 背后的守备名册
- [FactionManager](../../campaign/FactionManager) — 真正的外交查询
- [MobilePartyVisual](../MobilePartyVisual) — 兄弟地图实体视觉
- [Campaign](../../campaign/Campaign) — 地图场景的归属
- [SDK 总览](../../../architecture/sdk-overview) — 模块划分：视图 vs. 战役
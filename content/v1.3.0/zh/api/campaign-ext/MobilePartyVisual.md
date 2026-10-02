---
title: "MobilePartyVisual"
description: "移动部队的地图场景对象：战略 GameEntity、角色视觉、旗帜网格、朝向、附属关系与地图输入处理。"
---

# MobilePartyVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`（→ `MapEntityVisual`）
**File:** `SandBox.View/Map/Visuals/MobilePartyVisual.cs`

## 概述

`MobilePartyVisual` 是 [MobileParty](../../campaign/MobileParty) 的地图场景那一半。它渲染部队图标、可见的首领与坐骑，以及任何营地或旗帜实体，并处理该部队在战役地图上的悬停、点击与百科输入。

和它的兄弟 [SettlementVisual](../SettlementVisual) 一样，它派生自两层 `MapEntityVisual` 链，并挂在 `PartyBase` 上：

```
MapEntityVisual
 └─ MapEntityVisual<T>
      └─ MobilePartyVisual     （T = PartyBase —— 部队的名册对象）
```

与聚落视觉的差别在于三个 `AgentVisuals` 槽位以及附属树：

| 成员 | 渲染内容 |
|--------|-----------------|
| `HumanAgentVisuals` | 可见的人类角色（首领或名士） |
| `MountAgentVisuals` | 该角色的坐骑 |
| `CaravanMountAgentVisuals` | 商队的驮畜 |

附属关系是用视觉方式表达的：依附于宿主的部队，其 `AttachedTo` 返回**宿主的**视觉对象，因此嵌套部队被画成一整块移动的图块，而不是各自独立的图标。

## 心智模型

```
MobileParty（战役数据）
 └─ Party (PartyBase, IsMobile)  ──► MapEntityVisual<PartyBase>.MapEntity
        │
MobilePartyVisual
 ├─ StrategicEntity : GameEntity
 ├─ HumanAgentVisuals / MountAgentVisuals / CaravanMountAgentVisuals
 ├─ AttachedTo ──► 宿主部队的视觉对象   （顶层部队为 null）
 ├─ IsMainEntity ──► 这是玩家的部队
 ├─ BearingRotation ──► 图标朝向
 └─ OnHover / OnMapClick / OnOpenEncyclopedia / OnTrackAction
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    战役数据已存在；尚无视觉对象
地图界面激活（MapScreen 与 MapScene 构建 VisualsOfEntities）
    new MobilePartyVisual(party.Party)
    构建 StrategicEntity 与角色视觉
每帧
    GetVisualPosition() / IsVisibleOrFadingOut() / BearingRotation
用户输入
    OnHover() → OnMapClick(followModifierUsed) → OnOpenEncyclopedia()
部队变化
    party.Party.SetVisualAsDirty()  →  场景重建图标
拆卸
    ReleaseResources()
```

实际开发中最容易踩的坑：

- **只有地图界面存在时视觉对象才存在。** `MapScreen.Instance` 在菜单与任务中为 `null`，`MapScreen.VisualsOfEntities` 为空。所有触及场景的成员都只在地图界面期间有效。
- **构造函数接收的是 `PartyBase`，不是 `MobileParty`。** 正确调用是 `new MobilePartyVisual(party.Party)`。若 `PartyBase` 来源是动态的，请检查 `IsMobile`——聚落守备军同样能编译，渲染出来却是胡扯。
- **`ReleaseResources()` 会释放 `StrategicEntity` 与角色视觉。** 之后读取它们是原生崩溃，不会抛出可捕获的托管异常。
- **`AttachedTo` 是向上指，不是向下指。** 它返回**宿主**的视觉对象。想拿子部队请用 `MobileParty.AttachedParties`，并在树的顶层判空。
- **`IsMainEntity` 不等于数据侧的 `IsMainParty`。** 它是视觉对象自身的标志，取决于该部队是否属于玩家。逻辑判断请用 `party.IsMainParty`，`IsMainEntity` 只用于渲染决策。
- **`GetBannerOfCharacter` 是静态的且会缓存网格。** 它按旗帜返回缓存中的 `MetaMesh`，不要去 dispose 它。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 基类 | `MapEntityVisual<PartyBase>` → `MapEntityVisual` | `MapEntity` 是部队的名册对象 |
| 战役 | [MobileParty](../../campaign/MobileParty)、[PartyBase](../../campaign/PartyBase) | 该视觉所渲染的数据 |
| 政治 | `IFaction`、[FactionManager](../../campaign/FactionManager) | `IsEnemyOf` / `IsAllyOf` |
| 人物 | [Hero](../../campaign/Hero) | 角色视觉与旗帜 |
| 引擎 | `GameEntity`、`MetaMesh`、`Vec3` | 场景对象与缓存网格 |
| 兄弟页 | [SettlementVisual](../SettlementVisual) | 另一个地图实体视觉 |
| 界面 | `MapScreen`（命名空间 `SandBox.View.Map`） | 生命周期归属者；视觉对象通过 `MapScreen.VisualsOfEntities` 获取 |

## 主要成员

### 锚点

#### `public MobilePartyVisual(PartyBase partyBase) : base(partyBase)`

唯一的构造函数。传 `mobileParty.Party`。

#### `public override CampaignVec2 InteractionPositionForPlayer`

交互提示相对部队图标的位置。

#### `public override bool IsMobileEntity`

在基类上重写为 `true`。场景中的移动语义使用它。

#### `public override bool IsMainEntity`

当该视觉代表玩家部队时为 `true`。

### 场景对象

#### `public GameEntity StrategicEntity { get; private set; }`

渲染出的图标。只在地图界面激活到 `ReleaseResources()` 之间有效。

#### `public AgentVisuals HumanAgentVisuals { get; private set; }` / `MountAgentVisuals` / `CaravanMountAgentVisuals`

可见首领、其坐骑以及商队驮畜的角色视觉。在该 LOD 下没有可显示内容时为 `null`。

#### `public override Vec3 GetVisualPosition()` / `public override bool IsVisibleOrFadingOut()` / `public override float BearingRotation`

摆放、剔除与朝向。

### 附属关系

#### `public override MapEntityVisual AttachedTo`

宿主部队的视觉对象；顶层部队为 `null`。附属部队被画作宿主的一部分，因此它们自己的图标不会被绘制。

### 交互与政治

#### `public override void OnHover()` / `public override bool OnMapClick(bool followModifierUsed)` / `public override void OnOpenEncyclopedia()` / `public override void OnTrackAction()`

地图界面的输入回调。

#### `public override bool IsEnemyOf(IFaction faction)` / `IsAllyOf(IFaction faction)`

名牌与图标配色。廉价的视觉查询，不能替代 `FactionManager`。

### 旗帜与营地

#### `public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)`

获取（并缓存）旗帜网格。返回的是共享网格——不要 dispose，也不要假设每次调用都会得到新实例。

#### `public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)`

为已经停下的部队添加营地实体。`ref bool clearBannerComponentCache` 是场景用来判断旗帜组件是否需要重建的进出参数。

### 拆卸

#### `public override void ReleaseResources()`

释放场景对象。此后 `StrategicEntity` 与角色视觉均无效。

## 使用示例

### 示例 1：找到部队的视觉对象

```csharp
using System.Linq;
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public static Vec3? PartyScenePosition(MobileParty party)
{
    if (party?.Party == null || MapScreen.Instance == null)
    {
        return null;
    }

    // 视觉生命周期受地图界面约束；绝不要跨界面缓存。
    MobilePartyVisual visual = MapScreen.VisualsOfEntities.Values
        .OfType<MobilePartyVisual>()
        .FirstOrDefault(v => ReferenceEquals(v.MapEntity, party.Party));

    return visual?.GetVisualPosition();
}
```

### 示例 2：这个图标是玩家控制的吗？

```csharp
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static bool IsPlayerIcon(MobileParty party)
{
    if (party == null || MapScreen.Instance == null)
    {
        return false;
    }

    // 逻辑判断用数据侧……
    if (party.IsMainParty)
    {
        return true;
    }

    // ……渲染决策用视觉侧。
    foreach (MapEntityVisual visual in MapScreen.VisualsOfEntities.Values)
    {
        if (visual is MobilePartyVisual partyVisual &&
            ReferenceEquals(partyVisual.MapEntity, party.Party))
        {
            return partyVisual.IsMainEntity;
        }
    }

    return false;
}
```

### 示例 3：从顶层遍历附属树

```csharp
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem.Party;

public static int TopLevelPartyCount()
{
    if (MapScreen.Instance == null)
    {
        return 0;
    }

    int count = 0;
    foreach (MapEntityVisual visual in MapScreen.VisualsOfEntities.Values)
    {
        if (visual is MobilePartyVisual partyVisual &&
            partyVisual.MapEntity?.IsMobile == true &&
            partyVisual.AttachedTo == null)
        {
            count++;
        }
    }

    return count;
}
```

### 示例 4：在地图界面消失前释放视觉对象

```csharp
using SandBox.View.Map.Visuals;

public static void RetireVisual(MobilePartyVisual visual)
{
    if (visual == null)
    {
        return;
    }

    // 在地图界面仍然存活时释放 GameEntity 与角色视觉。
    visual.ReleaseResources();
}
```

## 风险与崩溃边界

1. **仅地图界面期间有效。** 菜单与任务中 `MapScreen.Instance` 为 `null`，`VisualsOfEntities` 为空。触碰 `StrategicEntity` 或角色视觉之前必须判空。
2. **原生对象已被释放。** `ReleaseResources()` 会让 `StrategicEntity`、`HumanAgentVisuals`、`MountAgentVisuals` 与 `CaravanMountAgentVisuals` 全部失效。之后读取它们会原生崩溃，且没有可捕获的托管异常。
3. **静态捕获视觉对象。** 把 `MobilePartyVisual` 存进 mod 单例或静态字段，会在下次地图界面切换后留下悬垂引用。请按需查找。
4. **传错宿主类型也能编译。** 构造函数接收 `PartyBase`，聚落守备军同样能编译，会产生没有角色的图标。调试时请检查 `MapEntity.IsMobile`。
5. **旗帜网格是共享缓存。** `GetBannerOfCharacter` 返回共享且被缓存的 `MetaMesh`。dispose 它会破坏所有其他旗帜，修改它则会污染所有人的缓存。
6. **`ref bool` 进出参数。** `AddTentEntityForParty` 的 `clearBannerComponentCache` 是与场景共享状态的契约。传入局部变量却不理会调用后的值，会让旗帜组件缓存失去同步。
7. **跨域依赖。** 该类位于 `SandBox.View` 这个视图模块。战役或任务逻辑不应引用它，否则那些上下文也会被迫加载视图程序集。
8. **逐帧 LINQ。** 每调用一次 `MapScreen.VisualsOfEntities.Values.OfType<MobilePartyVisual>()` 都会分配一条枚举器链。请在地图界面激活时缓存过滤后的列表。
9. **玩家数据泄露。** `MapEntity` 是部队的 `PartyBase`；为玩家尚未发现的部队读取其名册，等于绕过视野模型。

## 跨版本提示

- 基类链、构造函数形状、三个 `AgentVisuals` 槽位与 `GetBannerOfCharacter` 在 1.3.x 与 1.4.x 中未变。
- 海军部队在后续构建中获得额外的视觉处理。由于角色视觉属性在实际中可为空，请按 null 防御而不是假定它们总是被填充。

## 参见

- [MobileParty](../../campaign/MobileParty) — 该视觉所渲染的战役数据
- [PartyBase](../../campaign/PartyBase) — `MapEntity` 背后的名册对象
- [Hero](../../campaign/Hero) — 可见首领与旗帜
- [SettlementVisual](../SettlementVisual) — 兄弟地图实体视觉
- [Campaign](../../campaign/Campaign) — 地图场景的归属
- [SDK 总览](../../../architecture/sdk-overview) — 模块划分：视图 vs. 战役
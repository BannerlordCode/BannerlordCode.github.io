---
title: "MapSiegePOIVM"
description: "MapSiegePOIVM 的自动生成类参考。"
---
# MapSiegePOIVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegePOIVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs`

## 概述

`MapSiegePOIVM` 是围城战地图界面上的一个“兴趣点”（POI）标记——城墙上的一段、一台已部署的攻城器械的图钉。它是 `SandBox.ViewModelCollection.MapSiege.MapSiegePOIVM`（`MapSiegePOIVM.cs:16`），继承 `ViewModel`，并且只服务于**玩家参与的那一场围城**。

关键在于它不保存围城状态，而是每次都从静态的 `PlayerSiege` 现取：`private SiegeEvent Siege => PlayerSiege.PlayerSiegeEvent`（`MapSiegePOIVM.cs:20`）、`PlayerSide => PlayerSiege.PlayerSide`（`MapSiegePOIVM.cs:30`）、`Settlement => this.Siege.BesiegedSettlement`（`MapSiegePOIVM.cs:40`）。这意味着它永远只描述玩家这一侧的局面。

构造函数就做了不少事：`MapSiegePOIVM(POIType type, MatrixFrame mapSceneLocation, Camera mapCamera, int machineIndex, Action<MapSiegePOIVM> onSelection)`（`MapSiegePOIVM.cs:77`）根据 `type` 推出己方阵营（`MapSiegePOIVM.cs:81`），从阵营颜色算出 `SidePrimaryColor`（`MapSiegePOIVM.cs:97`）和 `SideSecondaryColor`（`MapSiegePOIVM.cs:109`），最后定下 `IsPlayerSidePOI`（`MapSiegePOIVM.cs:110`）。两个枚举定义在文件末尾：`POIType`（`MapSiegePOIVM.cs:831`）区分城墙段与攻守双方四类器械，`MachineTypes`（`MapSiegePOIVM.cs:846`）是图钉图标，其中 `None = -1`。

## 心智模型

把它当成**一个图钉，一半字段是“上帧快照”而不是实时状态**。这是这个类唯一需要记住的事，也是大多数错误的原因。

刷新链是两段的。`UpdateProperties()`（`MapSiegePOIVM.cs:121`）重新取 `Machine`、算血量、算器械类型、算排队序号，但结果全部写进 `_*` 私有字段（`_bindCurrentHitpoints`、`_bindMachineType`……）。真正把值推到公开属性上的是另一个方法 `RefreshBinding()`（`MapSiegePOIVM.cs:157`），它从 `:159` 开始一行行拷贝，赋值时才触发 `OnPropertyChangedWithValue`。同理 `RefreshPosition()`（`MapSiegePOIVM.cs:139`）只写 `_bindPosition`，屏幕外时写的是一个哨兵值 `new Vec2(-1000f, -1000f)`（`MapSiegePOIVM.cs:150`）。

所以：**调完 `UpdateProperties()` 不调 `RefreshBinding()`，你在 `CurrentHitpoints`、`MachineType`、`QueueIndex`、`Position` 上读到的仍然是上一帧的值**，而 UI 也不会收到任何属性变更通知。同一对组合对屏幕坐标也一样：`RefreshPosition()` 之后必须 `RefreshBinding()`。

其余几条边界也值得单独记住：

- **构造函数不检查围城是否存在，两个 refresh 方法却检查。** `RefreshHitpoints` 开头就 `if (this.Siege == null)`（`MapSiegePOIVM.cs:173`），`RefreshMachineType` 同样（`MapSiegePOIVM.cs:217`）；但构造函数直接读 `this.Siege.BesiegedSettlement.MapFaction`（在 `:80`-`:109` 之间）而**不做任何判空**。在非玩家参与的围城（`PlayerSiege.PlayerSiegeEvent` 为 null）或菜单里 new 一个，拿到的是 `NullReferenceException`，不是安全的默认值。
- **颜色是构造时定的，刷新不会重算。** `SidePrimaryColor`/`SideSecondaryColor` 只在构造函数里被赋值（`MapSiegePOIVM.cs:97`、`MapSiegePOIVM.cs:109`），整个类里没有 `RefreshColor`。阵营色变了、或者换了一场围城而你复用了旧实例，图钉颜色就一直是旧的。
- **`MachineIndex` 的含义由 `Type` 决定。** `GetDesiredMachine()`（`MapSiegePOIVM.cs:449`）里，`DefenderSiegeMachine` 取 side 0 的 `DeployedRangedSiegeEngines[MachineIndex]`（`MapSiegePOIVM.cs:456`），`AttackerRamSiegeMachine` 和 `AttackerTowerSiegeMachine` 取 side 1 的 `DeployedMeleeSiegeEngines[MachineIndex]`（`MapSiegePOIVM.cs:459`），`AttackerRangedSiegeMachine` 取 side 1 的远程列表（`MapSiegePOIVM.cs:461`）。同一个整数在不同 `POIType` 下索引的是不同的列表；把防守方的下标传给进攻方图钉，要么取到错的器械，要么直接越界。
- **`ExecuteSelection()` 会先回调再置位。** 它先 `this._onSelection(this)`（`MapSiegePOIVM.cs:116`）然后才 `IsSelected = true`；`_onSelection` 为 null 就是空引用异常。而且它**不取消其他图钉的选中态**，那需要父 VM 自己做。
- **“可见距离”是个写死的 20。** `RefreshDistanceValue(float newDistance)` 只做一件事：`this._bindIsInVisibleRange = (newDistance <= 20f)`（`MapSiegePOIVM.cs:135`）。没有任何模型可调，而且它同样只写 `_bind*`。
- **“在屏幕内”的判定写死了 200×100 的宽容边界。** `IsInsideWindow()`（`MapSiegePOIVM.cs:264`）用 `Screen.RealScreenResolutionWidth/Height` 再加上 `_latestX + 200f >= 0f && _latestY + 100f >= 0f`（`MapSiegePOIVM.cs:266`）。完全在屏幕外但靠近边缘的图钉仍会被判为 inside，此时 `Position` 就是一个真实的屏幕坐标而不是那个 `-1000` 哨兵。
- **器械类型是按 `SiegeEngine.StringId` 字符串匹配的，认不出的就变 `None`。** `GetMachineTypeFromId` 里 `"catapult"`、`"fire_catapult"`、`"fire_onager"`、`"mangonel"`、`"fire_mangonel"` 全部映射到同一个 `MachineTypes.Mangonel`，`"ladder"` 单独一个 `Ladder`。mod 注册了新的 `SiegeEngine` StringId 的话，它的图钉会直接显示成 `None` 图标。
- **`ExecuteShowTooltip()` 不判空。** 它把 `this.Machine` 直接交给 `SandBoxUIHelper.GetSiegeEngineInProgressTooltip`（`MapSiegePOIVM.cs:270`），而 `Machine` 对一个空的城墙段完全可能是 null。

## 怎么用

### 怎么拿到它

不要自己 new。它由地图围城界面自己创建，父 VM 是 `MapSiegeVM`。要在自己的地图层里拿到或替换它，在 `MapSiegeVM` 构建完之后从它的 POI 集合里取（每个条目对应一个 `POIType` + `machineIndex`），然后在每帧按 `UpdateProperties()` → `RefreshPosition()` → `RefreshDistanceValue(d)` → `RefreshBinding()` 的顺序驱动它。构造函数签名见 `MapSiegePOIVM.cs:77`，`onSelection` 是唯一会让你在点击时拿到该实例的回调。

### 典型用法

```csharp
using SandBox.ViewModelCollection.MapSiege;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;

// 只能出现在玩家参与的围城里：构造函数会直接读 PlayerSiege.PlayerSiegeEvent。
public static class MapSiegePoiDriver
{
    public static void Attach(MapSiegePOIVM poi, MatrixFrame mapSceneLocation, Camera mapCamera, int machineIndex)
    {
        var vm = new MapSiegePOIVM(
            MapSiegePOIVM.POIType.DefenderSiegeMachine,
            mapSceneLocation,
            mapCamera,
            machineIndex,
            selected => { /* 由父 VM 取消其他图钉的 IsSelected */ });

        // SidePrimaryColor / SideSecondaryColor / IsPlayerSidePOI 已在构造函数内定好，
        // 之后没有刷新入口。
    }

    public static void Tick(MapSiegePOIVM poi, float distanceToCamera)
    {
        // 第一段：全部写进 _bind* 私有字段。
        poi.UpdateProperties();
        poi.RefreshPosition();
        poi.RefreshDistanceValue(distanceToCamera);

        // 第二段：必须调用，否则公开属性仍是上一帧的值，UI 也收不到变更通知。
        poi.RefreshBinding();

        // 屏幕外时 Position 是 (-1000, -1000) 哨兵，不是真实坐标。
        if (!poi.IsInside)
        {
            return;
        }

        // MachineType 为 None 表示 SiegeEngine 的 StringId 不在引擎认得的清单里。
        if (poi.MachineType == (int)MapSiegePOIVM.MachineTypes.None)
        {
            return;
        }

        // Machine 可能为 null（空城墙段），ExecuteShowTooltip 不判空。
        if (poi.Machine != null && poi.IsConstructing)
        {
            poi.ExecuteShowTooltip();
        }
    }
}
```

### 最容易踩的坑

只调 `UpdateProperties()` 就不管了。它的返回值全写进 `_bind*` 字段（`MapSiegePOIVM.cs:121`），公开属性要等 `RefreshBinding()`（`MapSiegePOIVM.cs:157`）才会被拷贝和通知。结果就是你看到血量、器械类型、排队位置全是旧值，而 `OnPropertyChangedWithValue` 一次都没触发，看起来就像“数据不刷新”。改完属性请无条件补一句 `RefreshBinding()`。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public MapSiegePOIVM.POIType Type { get; }` |
| `MachineIndex` | `public int MachineIndex { get; }` |
| `LatestW` | `public float LatestW { get; }` |
| `Machine` | `public SiegeEvent.SiegeEngineConstructionProgress Machine { get; }` |
| `MapSceneLocationFrame` | `public MatrixFrame MapSceneLocationFrame { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `SidePrimaryColor` | `public Color SidePrimaryColor { get; set; }` |
| `SideSecondaryColor` | `public Color SideSecondaryColor { get; set; }` |
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `CurrentHitpoints` | `public float CurrentHitpoints { get; set; }` |
| `MaxHitpoints` | `public float MaxHitpoints { get; set; }` |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI { get; set; }` |
| `IsFireVersion` | `public bool IsFireVersion { get; set; }` |
| `IsInVisibleRange` | `public bool IsInVisibleRange { get; set; }` |
| `IsConstructing` | `public bool IsConstructing { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasItem` | `public bool HasItem { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |

## 主要方法

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteSelection();
```

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 重新计算并更新 properties 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.UpdateProperties();
```

### RefreshDistanceValue
`public void RefreshDistanceValue(float newDistance)`

**用途 / Purpose:** 使 distance value 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshDistanceValue(0);
```

### RefreshPosition
`public void RefreshPosition()`

**用途 / Purpose:** 使 position 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshPosition();
```

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 使 binding 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshBinding();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**用途 / Purpose:** 执行 show tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**用途 / Purpose:** 执行 hide tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteHideTooltip();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteSelection();
```

## 参见

- [本区域目录](../)
- [MapSiegeVM](../MapSiegeVM)
- [SiegeEvent](../../campaign/SiegeEvent)
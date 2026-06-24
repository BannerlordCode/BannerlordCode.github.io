<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CrosshairVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrosshairVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CrosshairVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs`

## 概述

`CrosshairVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsReloadPhasesVisible` | `public bool IsReloadPhasesVisible { get; set; }` |
| `IsHitMarkerVisible` | `public bool IsHitMarkerVisible { get; set; }` |
| `IsVictimDead` | `public bool IsVictimDead { get; set; }` |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot { get; set; }` |
| `TopArrowOpacity` | `public double TopArrowOpacity { get; set; }` |
| `ReloadPhases` | `public MBBindingList<ReloadPhaseItemVM> ReloadPhases { get; set; }` |
| `BottomArrowOpacity` | `public double BottomArrowOpacity { get; set; }` |
| `RightArrowOpacity` | `public double RightArrowOpacity { get; set; }` |
| `LeftArrowOpacity` | `public double LeftArrowOpacity { get; set; }` |
| `IsTargetInvalid` | `public bool IsTargetInvalid { get; set; }` |
| `CrosshairAccuracy` | `public double CrosshairAccuracy { get; set; }` |
| `CrosshairScale` | `public double CrosshairScale { get; set; }` |
| `CrosshairType` | `public int CrosshairType { get; set; }` |

## 主要方法

### SetProperties
`public void SetProperties(double accuracy, double scale)`

**用途 / Purpose:** 设置 `properties` 的值或状态。

### SetArrowProperties
`public void SetArrowProperties(double topArrowOpacity, double rightArrowOpacity, double bottomArrowOpacity, double leftArrowOpacity)`

**用途 / Purpose:** 设置 `arrow properties` 的值或状态。

### SetReloadProperties
`public void SetReloadProperties(in StackArray.StackArray10FloatFloatTuple reloadPhases, int reloadPhaseCount)`

**用途 / Purpose:** 设置 `reload properties` 的值或状态。

### ShowHitMarker
`public void ShowHitMarker(bool isVictimDead, bool isHumanoidHeadShot)`

**用途 / Purpose:** 处理 `show hit marker` 相关逻辑。

## 使用示例

```csharp
var value = new CrosshairVM();
value.SetProperties(0, 0);
```

## 参见

- [完整类目录](../catalog)
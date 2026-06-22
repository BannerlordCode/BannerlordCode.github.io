<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CrosshairVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrosshairVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CrosshairVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void SetProperties(double accuracy, double scale)
```

### SetArrowProperties

```csharp
public void SetArrowProperties(double topArrowOpacity, double rightArrowOpacity, double bottomArrowOpacity, double leftArrowOpacity)
```

### SetReloadProperties

```csharp
public void SetReloadProperties(in StackArray.StackArray10FloatFloatTuple reloadPhases, int reloadPhaseCount)
```

### ShowHitMarker

```csharp
public void ShowHitMarker(bool isVictimDead, bool isHumanoidHeadShot)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
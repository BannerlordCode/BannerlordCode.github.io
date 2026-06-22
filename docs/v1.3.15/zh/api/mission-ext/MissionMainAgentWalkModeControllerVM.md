<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentWalkModeControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentWalkModeControllerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMainAgentWalkModeControllerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ControlModes` | `public MBBindingList<WalkModeItemVM> ControlModes { get; set; }` |
| `LastUsedItem` | `public WalkModeItemVM LastUsedItem { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |


## 主要方法

### OnFinalize

```csharp
public override void OnFinalize()
```

### AddWalkMode

```csharp
public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)
```

### AddWalkMode

```csharp
public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)
```

### SetEnabled

```csharp
public void SetEnabled(bool isEnabled)
```

### GetIsWalkModeActivatedDelegate

```csharp
public delegate bool GetIsWalkModeActivatedDelegate()
```

### SetIsWalkModeActivatedDelegate

```csharp
public delegate void SetIsWalkModeActivatedDelegate(bool value)
```

### GetCanChangeWalkModeActivatedDelegate

```csharp
public delegate bool GetCanChangeWalkModeActivatedDelegate()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
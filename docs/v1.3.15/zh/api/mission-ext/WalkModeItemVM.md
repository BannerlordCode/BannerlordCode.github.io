<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WalkModeItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WalkModeItemVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`WalkModeItemVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `TypeId` | `public string TypeId { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnEnabled

```csharp
public void OnEnabled()
```

### ToggleState

```csharp
public void ToggleState()
```

### SetToggleInputKey

```csharp
public void SetToggleInputKey(HotKey hotKey, bool isHotKeyConsoleOnly)
```

### SetToggleInputKey

```csharp
public void SetToggleInputKey(GameKey gameKey, bool isHotKeyConsoleOnly)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
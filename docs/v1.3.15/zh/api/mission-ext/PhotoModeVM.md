<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PhotoModeVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PhotoModeVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`PhotoModeVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Keys` | `public MBBindingList<InputKeyItemVM> Keys { get; set; }` |
| `ColorGradeSelector` | `public SelectorVM<SelectorItemVM> ColorGradeSelector { get; set; }` |
| `OverlaySelector` | `public SelectorVM<SelectorItemVM> OverlaySelector { get; set; }` |
| `FocusEndValueOption` | `public PhotoModeValueOptionVM FocusEndValueOption { get; set; }` |
| `FocusStartValueOption` | `public PhotoModeValueOptionVM FocusStartValueOption { get; set; }` |
| `FocusValueOption` | `public PhotoModeValueOptionVM FocusValueOption { get; set; }` |
| `ExposureOption` | `public PhotoModeValueOptionVM ExposureOption { get; set; }` |
| `VerticalFovOption` | `public PhotoModeValueOptionVM VerticalFovOption { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### AddTakePictureKey

```csharp
public void AddTakePictureKey(GameKey key)
```

### AddFasterCameraKey

```csharp
public void AddFasterCameraKey(HotKey hotkey)
```

### AddKey

```csharp
public void AddKey(GameKey key)
```

### AddHotkey

```csharp
public void AddHotkey(HotKey hotkey)
```

### AddHotkeyWithForcedName

```csharp
public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)
```

### AddCustomKey

```csharp
public void AddCustomKey(string keyID, TextObject forcedName)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Reset

```csharp
public void Reset()
```

### UpdateTakePictureKeyVisibility

```csharp
public void UpdateTakePictureKeyVisibility(bool canTakePicture)
```

### UpdateFasterCameraKeyVisibility

```csharp
public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
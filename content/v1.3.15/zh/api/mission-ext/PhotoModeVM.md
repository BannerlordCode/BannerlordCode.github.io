---
title: "PhotoModeVM"
description: "PhotoModeVM 的自动生成类参考。"
---
# PhotoModeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PhotoModeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs`

## 概述

`PhotoModeVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.RefreshValues();
```

### AddTakePictureKey
`public void AddTakePictureKey(GameKey key)`

**用途 / Purpose:** **用途 / Purpose:** 将 take picture key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.AddTakePictureKey(key);
```

### AddFasterCameraKey
`public void AddFasterCameraKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 将 faster camera key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.AddFasterCameraKey(hotkey);
```

### AddKey
`public void AddKey(GameKey key)`

**用途 / Purpose:** **用途 / Purpose:** 将 key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.AddKey(key);
```

### AddHotkey
`public void AddHotkey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 将 hotkey 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.AddHotkey(hotkey);
```

### AddHotkeyWithForcedName
`public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)`

**用途 / Purpose:** **用途 / Purpose:** 将 hotkey with forced name 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.AddHotkeyWithForcedName(hotkey, forcedName);
```

### AddCustomKey
`public void AddCustomKey(string keyID, TextObject forcedName)`

**用途 / Purpose:** **用途 / Purpose:** 将 custom key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.AddCustomKey("example", forcedName);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.OnFinalize();
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.Reset();
```

### UpdateTakePictureKeyVisibility
`public void UpdateTakePictureKeyVisibility(bool canTakePicture)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 take picture key visibility 的最新表示。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.UpdateTakePictureKeyVisibility(false);
```

### UpdateFasterCameraKeyVisibility
`public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 faster camera key visibility 的最新表示。

```csharp
// 先通过子系统 API 拿到 PhotoModeVM 实例
PhotoModeVM photoModeVM = ...;
photoModeVM.UpdateFasterCameraKeyVisibility(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PhotoModeVM photoModeVM = ...;
photoModeVM.RefreshValues();
```

## 参见

- [本区域目录](../)
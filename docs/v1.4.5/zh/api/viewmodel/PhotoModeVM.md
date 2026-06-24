<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PhotoModeVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PhotoModeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PhotoModeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### AddTakePictureKey
`public void AddTakePictureKey(GameKey key)`

**用途 / Purpose:** 向当前集合/状态中添加 `take picture key`。

### AddFasterCameraKey
`public void AddFasterCameraKey(HotKey hotkey)`

**用途 / Purpose:** 向当前集合/状态中添加 `faster camera key`。

### AddKey
`public void AddKey(GameKey key)`

**用途 / Purpose:** 向当前集合/状态中添加 `key`。

### AddHotkey
`public void AddHotkey(HotKey hotkey)`

**用途 / Purpose:** 向当前集合/状态中添加 `hotkey`。

### AddHotkeyWithForcedName
`public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)`

**用途 / Purpose:** 向当前集合/状态中添加 `hotkey with forced name`。

### AddConsoleTakePictureKey
`public void AddConsoleTakePictureKey(string keyID, TextObject forcedName)`

**用途 / Purpose:** 向当前集合/状态中添加 `console take picture key`。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### UpdateTakePictureKeyVisibility
`public void UpdateTakePictureKeyVisibility(bool canTakePicture)`

**用途 / Purpose:** 更新 `take picture key visibility` 的状态或数据。

### UpdateFasterCameraKeyVisibility
`public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)`

**用途 / Purpose:** 更新 `faster camera key visibility` 的状态或数据。

## 使用示例

```csharp
var value = new PhotoModeVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
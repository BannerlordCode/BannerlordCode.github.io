<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadingWindowViewModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LoadingWindowViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs`

## 概述

`LoadingWindowViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `LoadingWindowViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentlyShowingMultiplayer` | `public bool CurrentlyShowingMultiplayer { get; }` |
| `Enabled` | `public bool Enabled { get; set; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GameModeText` | `public string GameModeText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `IsMultiplayer` | `public bool IsMultiplayer { get; set; }` |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled { get; set; }` |
| `LoadingImageName` | `public string LoadingImageName { get; set; }` |

## 主要方法

### UnloadImageDelegate
`public delegate void UnloadImageDelegate(int index)`

**用途 / Purpose:** 处理 `unload image delegate` 相关逻辑。

### LoadImageDelegate
`public delegate void LoadImageDelegate(int index, out string imageName)`

**用途 / Purpose:** 加载 `image delegate` 数据。

### SetTotalGenericImageCount
`public void SetTotalGenericImageCount(int totalGenericImageCount)`

**用途 / Purpose:** 设置 `total generic image count` 的值或状态。

## 使用示例

```csharp
var vm = new LoadingWindowViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)
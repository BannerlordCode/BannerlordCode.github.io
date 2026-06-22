<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadingWindowWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadingWindowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Loading
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Loading/LoadingWindowWidget.cs`

## 概述

`LoadingWindowWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimWidget` | `public Widget AnimWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |

## 使用示例

```csharp
// LoadingWindowWidget (Widget) 的典型用法
// 声明/访问一个 LoadingWindowWidget
var widget = root.GetChild("loadingWindowWidget");;
```

## 参见

- [完整类目录](../catalog)
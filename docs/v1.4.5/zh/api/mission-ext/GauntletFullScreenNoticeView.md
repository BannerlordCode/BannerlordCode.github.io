<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletFullScreenNoticeView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletFullScreenNoticeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletFullScreenNoticeView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs`

## 概述

`GauntletFullScreenNoticeView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletFullScreenNoticeView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletFullScreenNoticeView Current { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### SkipNotice
`public static void SkipNotice()`

**用途 / Purpose:** 处理 `skip notice` 相关逻辑。

## 使用示例

```csharp
var view = new GauntletFullScreenNoticeView();
```

## 参见

- [完整类目录](../catalog)
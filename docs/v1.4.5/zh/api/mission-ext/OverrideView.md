<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OverrideView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OverrideView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OverrideView : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/OverrideView.cs`

## 概述

`OverrideView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `OverrideView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BaseType` | `public Type BaseType { get; }` |

## 使用示例

```csharp
var view = new OverrideView();
```

## 参见

- [完整类目录](../catalog)
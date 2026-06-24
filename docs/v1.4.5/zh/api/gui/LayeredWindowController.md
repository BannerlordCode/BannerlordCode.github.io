<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LayeredWindowController`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LayeredWindowController

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class LayeredWindowController`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/LayeredWindowController.cs`

## 概述

`LayeredWindowController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `LayeredWindowController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetSize
`public void SetSize(int width, int height)`

**用途 / Purpose:** 设置 `size` 的值或状态。

### PostRender
`public void PostRender()`

**用途 / Purpose:** 处理 `post render` 相关逻辑。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<LayeredWindowController>();
```

## 参见

- [完整类目录](../catalog)
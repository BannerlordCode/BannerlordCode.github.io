<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IInputManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IInputManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `class`
**Base:** 无
**File:** `TaleWorlds.InputSystem/IInputManager.cs`

## 概述

`IInputManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `IInputManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IInputManager implementation = GetInputManagerImplementation();
```

## 参见

- [完整类目录](../catalog)
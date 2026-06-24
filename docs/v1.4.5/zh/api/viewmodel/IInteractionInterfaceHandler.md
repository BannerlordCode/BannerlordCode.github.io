<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IInteractionInterfaceHandler`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IInteractionInterfaceHandler

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/IInteractionInterfaceHandler.cs`

## 概述

`IInteractionInterfaceHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `IInteractionInterfaceHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IInteractionInterfaceHandler implementation = GetInteractionInterfaceHandlerImplementation();
```

## 参见

- [完整类目录](../catalog)
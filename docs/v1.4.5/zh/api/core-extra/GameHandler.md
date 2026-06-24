<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameHandler`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameHandler

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameHandler : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameHandler.cs`

## 概述

`GameHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `GameHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBeforeSave
`public abstract void OnBeforeSave()`

**用途 / Purpose:** 当 `before save` 事件触发时调用此方法。

### OnAfterSave
`public abstract void OnAfterSave()`

**用途 / Purpose:** 当 `after save` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomGameHandler();
```

## 参见

- [完整类目录](../catalog)
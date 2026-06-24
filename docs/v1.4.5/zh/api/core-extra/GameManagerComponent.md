<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameManagerComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameManagerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameManagerComponent.cs`

## 概述

`GameManagerComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `GameManagerComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameManager` | `public GameManagerBase GameManager { get; set; }` |

## 使用示例

```csharp
var implementation = new CustomGameManagerComponent();
```

## 参见

- [完整类目录](../catalog)
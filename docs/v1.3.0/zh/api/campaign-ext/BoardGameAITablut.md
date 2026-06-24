<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameAITablut`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameAITablut

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameAITablut : BoardGameAIBase`
**Base:** `BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAITablut.cs`

## 概述

`BoardGameAITablut` 位于 `SandBox.BoardGames.AI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnSetGameOver
`public override void OnSetGameOver()`

**用途 / Purpose:** 当 `set game over` 事件触发时调用此方法。

### CalculateMovementStageMove
`public override Move CalculateMovementStageMove()`

**用途 / Purpose:** 处理 `calculate movement stage move` 相关逻辑。

## 使用示例

```csharp
var value = new BoardGameAITablut();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)
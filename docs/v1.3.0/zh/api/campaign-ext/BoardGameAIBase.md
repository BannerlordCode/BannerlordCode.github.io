<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameAIBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameAIBase

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public abstract class BoardGameAIBase`
**Base:** 无
**File:** `SandBox/BoardGames/AI/BoardGameAIBase.cs`

## 概述

`BoardGameAIBase` 位于 `SandBox.BoardGames.AI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public BoardGameAIBase.AIState State { get; }` |
| `RecentMoveCalculated` | `public Move RecentMoveCalculated { get; }` |
| `AbortRequested` | `public bool AbortRequested { get; }` |

## 主要方法

### CalculatePreMovementStageMove
`public virtual Move CalculatePreMovementStageMove()`

**用途 / Purpose:** 处理 `calculate pre movement stage move` 相关逻辑。

### CalculateMovementStageMove
`public abstract Move CalculateMovementStageMove()`

**用途 / Purpose:** 处理 `calculate movement stage move` 相关逻辑。

### WantsToForfeit
`public virtual bool WantsToForfeit()`

**用途 / Purpose:** 处理 `wants to forfeit` 相关逻辑。

### OnSetGameOver
`public virtual void OnSetGameOver()`

**用途 / Purpose:** 当 `set game over` 事件触发时调用此方法。

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### SetDifficulty
`public void SetDifficulty(BoardGameHelper.AIDifficulty difficulty)`

**用途 / Purpose:** 设置 `difficulty` 的值或状态。

### HowLongDidAIThinkAboutMove
`public float HowLongDidAIThinkAboutMove()`

**用途 / Purpose:** 处理 `how long did a i think about move` 相关逻辑。

### UpdateThinkingAboutMove
`public void UpdateThinkingAboutMove(float dt)`

**用途 / Purpose:** 更新 `thinking about move` 的状态或数据。

### ResetThinking
`public void ResetThinking()`

**用途 / Purpose:** 将 `thinking` 重置为初始状态。

### CanMakeMove
`public bool CanMakeMove()`

**用途 / Purpose:** 判断当前对象是否可以执行 `make move`。

## 使用示例

```csharp
var implementation = new CustomBoardGameAIBase();
```

## 参见

- [完整类目录](../catalog)
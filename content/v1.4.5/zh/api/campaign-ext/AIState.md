---
title: "AIState"
description: "沙盒棋盘 AI 的六态线程状态机：NeedsToRun → ReadyToRun → Running → Done，外加 AbortRequested 与 Aborted 两条中止路径。"
---

# AIState

**Namespace:** `SandBox.BoardGames.AI`（嵌套声明，全名 `SandBox.BoardGames.AI.BoardGameAIBase.AIState`）
**Module:** `SandBox`
**Type:** `public enum AIState`
**Base:** 无
**File:** `SandBox.BoardGames.AI/BoardGameAIBase.cs`

## 概述

这是棋盘 AI 在**独立线程**上算一步棋时的状态标记。它是 `BoardGameAIBase` 的嵌套枚举，宿主类同时也是这个状态机的全部实现者——六个取值与 `BoardGameAIBase` 里那几段 `lock (_stateLock)` 是一一对应的。`BoardGameAIBase.State` 是一个 `volatile AIState` 的只读投影，所以外部随时能读到这个状态而不需要加锁。

六个状态分两条主线四条支线。**主线**是 `NeedsToRun`（空闲，等主线程派活）→ `ReadyToRun`（已被 `UpdateThinkingAboutMove` 置位，任务线程已 invoke）→ `Running`（后台线程正在算）→ `Done`（算完了，`RecentMoveCalculated` 已就位）。**中止支线**是 `AbortRequested`（主线程请求中止，只在 `ReadyToRun` / `Running` 两个状态下被写入）与 `Aborted`（后台线程在 `OnBeginSeparateThread` 或 `OnExitSeparateThread` 里看到中止请求后落进来，此时 `RecentMoveCalculated` 被重置为 `Move.Invalid`）。

判定「AI 能不能落子」的公开方法是 `CanMakeMove()`，它的条件比状态本身更严格：**必须 `State == AIState.Done`，且思考时长 `_aiDecisionTimer >= 1.5f`**。也就是说 AI 算完了还不够，还得等一个最短展示时间。

## 心智模型

把它当成「**主线程与后台线程之间的握手令牌**」。理解它只需要看清三个方法的分工。

`UpdateThinkingAboutMove(float dt)` 是主线程每帧调的：先把 `_aiDecisionTimer += dt`，再在锁内检查 `State == AIState.NeedsToRun` 就改成 `ReadyToRun` 并 `_aiTask.Invoke()` 唤醒后台任务。**这是唯一能把状态从 `NeedsToRun` 推出去的地方**。

`OnBeginSeparateThread()` 是后台线程的开场白：在锁内看 `AbortRequested`（也就是 `State == AbortRequested`），真就置 `Aborted` 并返回 false 告诉上层「别算了」；否则置 `Running` 返回 true。

`OnExitSeparateThread(Move)` 是后台线程的收尾：还是那个锁，中止了就置 `Aborted` 并把 `RecentMoveCalculated` 抹成 `Move.Invalid`；没中止就置 `Done` 并把算出的 `Move` 存进 `RecentMoveCalculated`。

`OnSetGameOver()` 是唯一主动置 `AbortRequested` 的地方：它在锁内对 `ReadyToRun` 与 `Running` 两种状态都改成 `AbortRequested`，然后 `_aiTask.Wait()` **阻塞等后台线程退出**，最后 `Reset()`。因为 `Running` 时后台线程正在算，这一步是会真阻塞的。

由此推出两个必须记住的结论。第一，**`RecentMoveCalculated` 在 `Aborted` 下是无意义的**，外部必须先判 `CanMakeMove()`（它已经隐含了 `State == Done`）再读 `RecentMoveCalculated`。第二，**`Reset()` 不区分成败**：它无条件把 `RecentMoveCalculated = Move.Invalid`、`MayForfeit = true`、`MaxDepth = 0`，然后 `ResetThinking()` 把状态打回 `NeedsToRun`、计时器清零。所以「重开一盘」和「上一盘被判中止」走的是同一条复位路径。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `NeedsToRun` | `NeedsToRun = 0` | 空闲态，也是 `ResetThinking()` 与 `Reset()` 的落点。只有在它上面，`UpdateThinkingAboutMove` 才会真正唤醒后台任务；其它任何状态下调用都只是累加计时器。 |
| `ReadyToRun` | `ReadyToRun = 1` | 已派活、后台任务刚被 `Invoke` 但还没真正进入 `Running`。它是 `OnSetGameOver()` 中止请求的合法起点之一。**中间态极短**，通常在一帧之内就跳到 `Running`。 |
| `Running` | `Running = 2` | 后台线程正在搜索。`OnSetGameOver()` 在这个状态下会置 `AbortRequested` 然后 `_aiTask.Wait()` **阻塞主线程**，直到后台线程走到 `OnExitSeparateThread` 落进 `Aborted`。 |
| `AbortRequested` | `AbortRequested = 3` | 中止请求态，**由主线程写、后台线程读**。后台线程在 `OnBeginSeparateThread` 与 `OnExitSeparateThread` 两处检查它；`BoardGameAIBase.AbortRequested` 这个便捷属性就是 `State == AIState.AbortRequested`。 |
| `Aborted` | `Aborted = 4` | 中止完成态。落进来时 `RecentMoveCalculated` 一定是 `Move.Invalid`。`CanMakeMove()` 对它返回 false，所以外部不会误读到一个残留的 Move。 |
| `Done` | `Done = 5` | 计算完成态，`RecentMoveCalculated` 有效。`CanMakeMove()` 还额外要求 `_aiDecisionTimer >= 1.5f`（**用的是字面量，不是那个同名的 `private const`**），所以 Done 不等于「现在就能落子」。 |

## 真实示例

驱动一整轮：每帧喂 `dt`，直到能落子：

```csharp
public static void PumpAi(MissionBoardGameLogic boardGameHandler)
{
    MyChessAi ai = new MyChessAi(boardGameHandler, AIDifficulty.Normal);

    for (int frame = 0; frame < 600 && !ai.CanMakeMove(); frame++)
    {
        ai.UpdateThinkingAboutMove(0.016f);
    }

    if (ai.CanMakeMove())
    {
        Debug.Print("ai decided: " + ai.RecentMoveCalculated, 0);
    }
}
```

判中止——`BoardGameAIBase.AbortRequested` 是唯一为此提供的便捷属性：

```csharp
public static void OnBoardClosed(MyChessAi ai)
{
    // ReadyToRun / Running 会被置 AbortRequested，然后阻塞等后台线程退出，
    // 最后 Reset() 把状态打回 NeedsToRun
    ai.OnSetGameOver();

    Debug.Print("state after game over = " + ai.State, 0);
}
```

看「卡住」的状态分布：只 `Done` 且计时够长才允许落子，其余五种状态下 `CanMakeMove()` 一律为 false。

```csharp
public static void DumpAiState(MyChessAi ai)
{
    Debug.Print("state=" + ai.State, 0);
    Debug.Print("abort requested=" + ai.AbortRequested, 0);
    Debug.Print("thought for " + ai.HowLongDidAIThinkAboutMove() + "s", 0);
    Debug.Print("can move=" + ai.CanMakeMove(), 0);
}
```

中途换难度并复位（`SetDifficulty` 只重跑 `InitializeDifficulty()`，不复位状态机，所以通常还要配一次 `ResetThinking()`）：

```csharp
public static void SwitchDifficulty(MyChessAi ai)
{
    ai.SetDifficulty(AIDifficulty.Hard);

    // 复位到 NeedsToRun，计时器清零
    ai.ResetThinking();

    Debug.Print("state after reset = " + ai.State, 0);
}
```

## 风险与边界

- **嵌套枚举，不是顶层类型。** 全名是 `SandBox.BoardGames.AI.BoardGameAIBase.AIState`；在 `BoardGameAIBase` 内部可以直接写 `AIState.Running`，外部要写全名或 `using` 到宿主类。
- **和 `Agent.AIStateFlag` 无关。** `TaleWorlds.MountAndBlade/Agent.cs:189` 里另有一个 `AIStateFlag : uint`（位标记），与本枚举语义完全不同，别在同一个文件里同时 `using` 后裸写 `AIState`。
- **`Done` 不代表可以落子。** `CanMakeMove()` 还要 `_aiDecisionTimer >= 1.5f`。AI 算得太快时会出现「已 Done 但仍需等待」。
- **那个 1.5 秒是字面量。** `BoardGameAIBase` 里有 `private const float AIDecisionDuration = 1.5f`，但 `CanMakeMove()` 里写的是 `_aiDecisionTimer >= 1.5f`，**常量零引用**。改常量不会有任何效果。
- **`Aborted` 时 `RecentMoveCalculated` 一定是 `Move.Invalid`。** 直接读它会拿到一个无效 Move。必须先 `CanMakeMove()`。
- **`OnSetGameOver()` 会阻塞主线程。** 状态是 `Running` 时它要 `_aiTask.Wait()` 等后台搜索结束，深搜下可能是可感知的卡顿。
- **`Reset()` 不区分正常结束与中止。** 两种情况都把 `MayForfeit` 重置为 `true`、`MaxDepth` 重置为 `0`，所以「不许认输」这类设置在复位后会丢。
- **`UpdateThinkingAboutMove` 在非 `NeedsToRun` 状态下只累加计时器。** 每帧无条件调用是安全的（官方就是这么用的），但也意味着状态卡在 `Running` 时计时器会一直涨。
- **`State` 是 `volatile` 只读投影。** 可以在任意线程读；但读到的值随时可能已被后台线程改掉，判断与读取之间要自己同步。
- **不参与存档。** 棋盘 AI 是单局临时对象。

## 依赖关系

- 唯一宿主：[BoardGameAIBase](../BoardGameAIBase) 的 `volatile AIState _state` 与 `public AIState State` 是这个枚举的存在理由，`UpdateThinkingAboutMove` / `OnBeginSeparateThread` / `OnExitSeparateThread` / `ResetThinking` / `Reset` / `CanMakeMove` / `OnSetGameOver` 是全部状态迁移点
- 后台任务：`TaleWorlds.DotNet.AsyncTask.CreateWithDelegate` 在 `BoardGameAIBase` 构造函数里创建，`_aiTask.Invoke()` 与 `_aiTask.Wait()` 构成主线程与后台线程的同步手段
- 难度搭档：[AIDifficulty](AIDifficulty) 由同一个宿主类持有，两者的交互点是 `InitializeDifficulty()`
- 计算产物：`Move.Invalid` 是中止与复位时写入 `RecentMoveCalculated` 的哨兵值，详见同桶的 [Move](Move)
- 棋局上下文：`MissionBoardGameLogic` 的 `CurrentBoardGame` 与 `Board` 决定 AI 走 `CalculatePreMovementStageMove` 还是 `CalculateMovementStageMove`
- 容易混淆的同名类型：`TaleWorlds.MountAndBlade.Agent` 里的 `AIStateFlag` 与本枚举无关
- 桶首页：[campaign-ext API 分区](../)

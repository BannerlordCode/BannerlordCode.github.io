---
title: "BoardGameState"
description: "棋局结局的枚举：None / Win / Loss / Draw 四个值，没有 NumTypes 哨兵。"
---

# BoardGameState

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public enum BoardGameState`
**基类：** 无（`System.Enum` 派生）
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`（声明见第 22 行）

## 概述

本类是一局棋结局的枚举，嵌套在 `BoardGameHelper` 内。四个值：`None`（默认/未结束）、`Win`、`Loss`、`Draw`（平局）。与同文件的 `AIDifficulty` **不一致**：它**只有 4 个值、没有 `NumTypes` 哨兵**。

## 心智模型

把 BoardGameState 想成棋类小游戏的「结局记录器」：`None` 是默认值（也是 `default`），表示棋局未结束；`Win` / `Loss` 是从某一方视角定义的结局；`Draw` 是平局。关键设计决策是**没有 `NumTypes` 哨兵**——想遍历结局不能照 `AIDifficulty` 抄。`Win`/`Loss` 是**从某一方视角**定义的，枚举本身不带「谁赢了」。它是 `BoardGameHelper` 的**嵌套类型**，引用要写 `BoardGameHelper.BoardGameState`。

## 何时使用 / 何时不要使用

**何时使用：**
- 要在棋类小游戏里记录或检查棋局结局时，用 `BoardGameHelper.BoardGameState.Win` / `.Loss` / `.Draw` / `.None`。
- 要判断棋局是否结束时，用 `state != BoardGameHelper.BoardGameState.None`。

**何时不要使用：**
- 不要把 `None` 当平局处理——`None` 是默认值，`Draw` 才是平局。
- 不要试图遍历所有结局——它没有 `NumTypes` 哨兵，与 `AIDifficulty` 不一致。
- 不要试图在 `BoardGameHelper.BoardGameState` 之外引用它——它是嵌套类型。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `None` | 默认值，棋局未结束。也是 `default`。`BoardGameHelper.cs:25` |
| `Win` | 胜利（从某一方视角）。`BoardGameHelper.cs:27` |
| `Loss` | 失败（从某一方视角）。`BoardGameHelper.cs:29` |
| `Draw` | 平局。`BoardGameHelper.cs:31` |

## 示例

```csharp
// 检查游戏是否结束
BoardGameHelper.BoardGameState state = BoardGameHelper.BoardGameState.None;
if (state == BoardGameHelper.BoardGameState.Win)
    Debug.Print($"You win! game={Game.Current != null}");
```

## 风险与边界

- **`None` 与「平局」是两件事** —— `None` 是默认值，`Draw` 才是平局，把 `None` 当平局处理会错。
- 它**只有 4 个值、没有 `NumTypes` 哨兵**（与同文件的 `AIDifficulty` **不一致**）⇒ 想遍历结局不能照 `AIDifficulty` 抄。
- 它是嵌套类型 ⇒ 引用要写 `BoardGameHelper.BoardGameState`。
- `Win`/`Loss` 是**从某一方视角**定义的，枚举本身不带「谁赢了」。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— 棋类小游戏是战役里的活动，生命周期挂在战役上。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 棋类小游戏是战役里的活动，启动入口在战役侧。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[BoardGameHelper](../BoardGameHelper) · [AIDifficulty](../AIDifficulty)

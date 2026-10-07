---
title: "AIDifficulty"
description: "棋类小游戏 AI 难度档位的枚举：Easy / Normal / Hard 三个实际档，加 NumTypes 哨兵值。"
---

# AIDifficulty

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public enum AIDifficulty`
**基类：** 无（`System.Enum` 派生）
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`（声明见第 9 行）

## 概述

本类是棋类小游戏 AI 难度档位的枚举，嵌套在 `BoardGameHelper` 内。三个实际难度档 `Easy` / `Normal` / `Hard`，加一个 `NumTypes` 哨兵值（= 3，不是可选难度）。它是顺序枚举（`Easy=0, Normal=1, Hard=2, NumTypes=3`），没有 `[Flags]`。

## 心智模型

把 AIDifficulty 想成棋类小游戏的「难度选择器」：`Easy` 是最低档，`Normal` 是默认档，`Hard` 是最高实际档，`NumTypes` 是「枚举值个数」哨兵。关键设计决策是**哨兵值的存在**——遍历要写成排除上界的形式（`d < AIDifficulty.NumTypes`），而不是遍历所有枚举值。它是 `BoardGameHelper` 的**嵌套类型**，引用要写 `BoardGameHelper.AIDifficulty`。

## 何时使用 / 何时不要使用

**何时使用：**
- 要在棋类小游戏里设置 AI 难度时，用 `BoardGameHelper.AIDifficulty.Easy` / `.Normal` / `.Hard`。
- 要遍历所有难度档位时，用 `for (int i = 0; i < (int)BoardGameHelper.AIDifficulty.NumTypes; i++)`。

**何时不要使用：**
- 不要把 `NumTypes` 当作可选难度——它是哨兵值，不是难度。
- 不要依赖 `(int)` 强转做算术——它是顺序枚举，没有 `[Flags]`，强转很脆弱。
- 不要试图在 `BoardGameHelper.AIDifficulty` 之外引用它——它是嵌套类型。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `Easy` | 最低难度档。`BoardGameHelper.cs:12` |
| `Normal` | 默认难度档。`BoardGameHelper.cs:14` |
| `Hard` | 最高实际难度档。`BoardGameHelper.cs:16` |
| `NumTypes` | 哨兵值（= 3），不是可选难度。遍历要写成排除上界的形式。`BoardGameHelper.cs:18` |

## 示例

```csharp
// 遍历所有难度档位（排除哨兵值）
for (int i = 0; i < (int)BoardGameHelper.AIDifficulty.NumTypes; i++)
{
    BoardGameHelper.AIDifficulty d = (BoardGameHelper.AIDifficulty)i;
    Debug.Print($"difficulty = {d} game={Game.Current != null}");
}
```

## 风险与边界

- `NumTypes` 不是难度，是「枚举值个数」哨兵 ⇒ 遍历要写成排除上界的形式（`d < AIDifficulty.NumTypes`）。
- 没有 `[Flags]`，是顺序枚举（`Easy=0, Normal=1, Hard=2, NumTypes=3`）⇒ 依赖 `(int)` 强转做算术很脆弱。
- 它是 `BoardGameHelper` 的**嵌套类型** ⇒ 引用要写 `BoardGameHelper.AIDifficulty`。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— 棋类小游戏是战役里的活动，生命周期挂在战役上。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 棋类小游戏是战役里的活动，启动入口在战役侧。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[BoardGameHelper](../BoardGameHelper) · [BoardGameState](../BoardGameState)

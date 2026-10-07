---
title: "BoardGameHelper"
description: "棋类小游戏的类型容器：把 AI 难度与棋局结局两个枚举收在一起，本身没有任何方法。"
---

# BoardGameHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class BoardGameHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`（声明见第 6 行）

## 概述

本类是棋类小游戏的**类型容器**——它把 `AIDifficulty`（AI 难度档位）与 `BoardGameState`（棋局结局）两个枚举收在一起。它**没有任何方法、字段、属性**，既不能实例化也没有可调的方法。按名字猜「这里能下棋/算 AI 走法」会错，真逻辑不在这里。

## 心智模型

把 BoardGameHelper 想成棋类小游戏的「词汇表」而不是「棋类逻辑」——这里只定义「难度」与「结局」两个枚举，真正的下棋逻辑、AI 走法计算、胜负判定都不在这个类里。它存在的意义是让 mod 开发者有一个统一的地方引用 `BoardGameHelper.AIDifficulty` 和 `BoardGameHelper.BoardGameState`，而不是在每个 mod 里各自定义一套枚举。两个 enum 是**嵌套类型**，引用要写 `BoardGameHelper.AIDifficulty` / `BoardGameHelper.BoardGameState`。

## 何时使用 / 何时不要使用

**何时使用：**
- 要在棋类小游戏里设置 AI 难度时，用 `BoardGameHelper.AIDifficulty`。
- 要在棋类小游戏里记录或检查棋局结局时，用 `BoardGameHelper.BoardGameState`。
- 要遍历所有难度档位或结局时，用这两个枚举。

**何时不要使用：**
- 不要试图调用本类的方法——它**没有任何方法**。
- 不要试图实例化本类——它是 `static` 的。
- 不要试图继承本类来扩展——它是 `static` 的，不能继承。
- 不要在这里找下棋逻辑或 AI 走法计算——真逻辑不在这里。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `public enum AIDifficulty` | 嵌套枚举，棋类小游戏里 AI 的难度档位。引用要写 `BoardGameHelper.AIDifficulty`。`BoardGameHelper.cs:9` |
| `public enum BoardGameState` | 嵌套枚举，一局棋的结局。引用要写 `BoardGameHelper.BoardGameState`。`BoardGameHelper.cs:22` |

## 示例

```csharp
// 设置 AI 难度
BoardGameHelper.AIDifficulty difficulty = BoardGameHelper.AIDifficulty.Normal;
// 检查游戏状态
BoardGameHelper.BoardGameState state = BoardGameHelper.BoardGameState.Win;
Debug.Print($"difficulty={difficulty} state={state} game={Game.Current != null}");
```

## 风险与边界

- 这个类是**空的**——它**没有任何方法**；按名字猜「这里能下棋/算 AI 走法」会错，它只是把两个棋类枚举收在一起的容器。
- 两个 enum 是**嵌套类型** ⇒ 引用要写 `BoardGameHelper.AIDifficulty` / `BoardGameHelper.BoardGameState`。
- 它 `static` 且无成员，既不能实例化也没有可调的方法，**不能靠继承扩展**。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— 棋类小游戏是战役里的活动，生命周期挂在战役上。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 棋类小游戏是战役里的活动，启动入口在战役侧。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[AIDifficulty](../AIDifficulty) · [BoardGameState](../BoardGameState)

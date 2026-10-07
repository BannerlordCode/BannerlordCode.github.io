---
title: "AIDifficulty"
description: "沙盒棋盘游戏 AI 的难度枚举：Easy / Normal / Hard 三个真实档位加一个 NumTypes 哨兵，由 BoardGameAIBase 持有并驱动搜索深度。"
---

# AIDifficulty

**Namespace:** `Helpers`（嵌套声明，全名 `Helpers.BoardGameHelper.AIDifficulty`）
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum AIDifficulty`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## 概述

这是沙盒棋盘游戏（象棋、九宫格、掷骰子那几类）里 AI 对手难度的三档枚举。它是**嵌套类型**，宿主是同文件里的 `public static class BoardGameHelper`——而那个类除了当命名空间容器之外什么都不做，纯粹是「给两个小枚举找个落脚点」。使用时要写全名 `AIDifficulty`（同文件另有 `BoardGameState`，`using Helpers;` 之后两个名字都可直接用）。

四个取值的分工很清楚：`Easy`、`Normal`、`Hard` 是三个真实难度，`NumberOfTypes` **不是难度**——它是「一共有几档」的哨兵值，等于 3，专门给数组长度和 `for` 循环上界用。它可以被赋给一个 `AIDifficulty` 变量（枚举不做范围检查），所以传 `NumTypes` 编译得过、运行也不会立刻炸，只会在 AI 里走到默认分支。

真正的消费者只有一处：`SandBox.BoardGames.AI.BoardGameAIBase`。它的构造函数接收一个 `AIDifficulty difficulty` 存进 `protected AIDifficulty Difficulty { get; private set; }`，随后 `Initialize()` 调 `Reset()` + `InitializeDifficulty()`，由**派生类**决定这一档到底意味着什么——基类自己完全不看这个值。运行时还能通过 `SetDifficulty(AIDifficulty)` 热切换，切完会立刻重新调一次 `InitializeDifficulty()`。

## 心智模型

把它当成「**传给 AI 的一枚档位标签，真正语义在派生类**」。理解它只需要三件事。

第一，**这个枚举不认识游戏本体**。它不参与战役、不进存档、不被 `Campaign` 引用；`grep` 全树，只有 `BoardGameAIBase` 的构造、`SetDifficulty` 与抽象方法 `InitializeDifficulty()` 三处涉及它。所以判断「这个值有什么用」永远要去读具体的棋盘 AI 子类，而不是读枚举本身。

第二，**`Difficulty` 是 `protected` 属性，不是公开字段**。外部拿不到当前 AI 是哪个难度，只能在创建 AI 时指定，或调 `SetDifficulty` 换。想读难度只能自己留一份副本。

第三，**`NumberOfTypes` 是哨兵，用 `Enum.GetValues` 时会被算进去**。`Enum.GetValues(typeof(AIDifficulty)).Length` 返回 4 而不是 3。任何「遍历所有难度」的循环都要 `i < (int)AIDifficulty.NumTypes` 这样显式截断，否则会对哨兵值调一次 `InitializeDifficulty()`。

第四点值得单独记：`BoardGameAIBase.CanMakeMove()` 里那个 1.5 秒的思考时间是 `private const float AIDecisionDuration = 1.5f`——**但常量声明了却从未被引用**，实际代码写的是字面量 `_aiDecisionTimer >= 1.5f`。所以「AI 想多久」这个数值在 1.4.5 里无法通过常量调整。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Easy` | `Easy = 0` | 最低难度档。具体表现（搜索深度多少、随机性多大）完全由派生类的 `InitializeDifficulty()` 决定，基类不为这个值做任何事。 |
| `Normal` | `Normal = 1` | 默认难度档。同样没有基类语义。 |
| `Hard` | `Hard = 2` | 最高难度档。1.4.5 里没有更高的档，也没有「无上限」这一档。 |
| `NumTypes` | `NumTypes = 3` | **哨兵值，不是难度**。等于真实档位数 3，专门给数组长度与循环上界用。可以被赋进 `AIDifficulty` 变量而不报错，遍历时务必显式排除。 |

## 死成员与陷阱

**本次审查未在本页测出可写入的条目。** 这不等于「本页没有死成员」：

- 工具在本页报出「0 调用点」的只有 `NumTypes`（`bin/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs:10`）。它是 `AIDifficulty` 枚举的**末尾哨兵**，`override=0`。`grep -o -w` 复核确认全树确实只有声明本身那一行，但「零引用」在这里是**语言与语义的必然**（枚举哨兵不描述任何行为），不是 modder 会踩的坑，因此按口径不写入表格。
- 本页其余成员在工具的分类里多数落在 `UNSUPPORTED`（同名成员串味 / 跨文件无限定调用），这些行的调用点数按定义不可当结论。
- 若日后要复核本页，请用 `grep -o -w <成员名>` 数**出现次数**，不要用命中行数。

口径：源码树 `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`，8,583 个 `.cs`（含 `bin/`）。

## 真实示例

创建一个指定难度的棋盘 AI。**注意 `Difficulty` 与 `BoardGameHandler` 都是 `protected`**，构造参数才是对外的入口：

```csharp
public class MyChessAi : BoardGameAIBase
{
    public MyChessAi(MissionBoardGameLogic boardGameHandler, AIDifficulty difficulty)
        : base(difficulty, boardGameHandler)
    {
    }

    protected override void InitializeDifficulty()
    {
        // 难度语义完全由这里决定：基类只负责在构造与 SetDifficulty 时回调它
        MaxDepth = Difficulty == AIDifficulty.Hard ? 6 : 2;
        MayForfeit = Difficulty != AIDifficulty.Hard;
    }

    public override Move CalculateMovementStageMove()
    {
        return Move.Invalid;
    }
}
```

运行时热切难度——`SetDifficulty` 会立即重新跑一次 `InitializeDifficulty()`，所以上面那个 `MaxDepth` 会当场生效：

```csharp
public static void MakeAiHarder(MissionBoardGameLogic handler)
{
    MyChessAi ai = new MyChessAi(handler, AIDifficulty.Normal);
    ai.SetDifficulty(AIDifficulty.Hard);

    ai.UpdateThinkingAboutMove(0f);
    ai.ResetThinking();
}
```

遍历「全部真实档位」时显式截断哨兵（`NumTypes` 会被 `Enum.GetValues` 一并返回）：

```csharp
foreach (AIDifficulty difficulty in Enum.GetValues(typeof(AIDifficulty)))
{
    if ((int)difficulty >= (int)AIDifficulty.NumTypes)
    {
        continue;
    }

    Debug.Print("real difficulty slot " + (int)difficulty, 0);
}
```

## 风险与边界

- **哨兵值 `NumTypes` 可以被合法赋值。** `AIDifficulty d = AIDifficulty.NumTypes;` 编译通过、不抛异常，只会走到 `InitializeDifficulty()` 里所有比较都不匹配的默认分支。
- **`Enum.GetValues` 会把它算进去。** 长度为 4，不是 3。
- **不要写成 `Difficulty.Hard` 这样的成员访问。** 它是顶层枚举（在 `Helpers` 命名空间里），不是某个类的嵌套成员，编译器会报「类型名不存在」。
- **枚举本身不带任何逻辑。** 想改难度表现必须覆盖 `BoardGameAIBase.InitializeDifficulty()`（`protected abstract`），改枚举值没有意义。
- **当前难度读不到。** `BoardGameAIBase.Difficulty` 是 `protected` 属性，外部无法查询某个 AI 实例现在跑在哪一档。
- **`BoardGameHelper` 只是个容器。** 它是 `static class`，无成员，和 `BoardGameState`（`None / Win / Loss / Draw`）一起住在同一个文件里；两者没有互相引用。
- **不参与存档。** 棋盘 AI 的难度是每次开局临时对象的状态，不写进任何 `[SaveableField]`。
- **1.4.5 的思考时长常量是死的。** `BoardGameAIBase.AIDecisionDuration = 1.5f` 声明后零引用，实际判断用的是字面量 `1.5f`。想调 AI 思考节奏只能改派生类里对 `UpdateThinkingAboutMove` 的调用频率。

## 跨版本提示

**判断不了** —— 卡在没拿到 1.4.6 / 1.3.15 侧的对照文件路径。`Helpers/BoardGameHelper.cs` 这个 `Helpers` 顶层命名空间在 1.4.5 里被 `TaleWorlds.CampaignSystem`、`TaleWorlds.MountAndBlade` 等多个程序集同时使用（`Army.cs` 顶部就有 `using Helpers;`），跨程序集同名命名空间下同名类型的解析顺序需要逐版本核对源码才能给结论，本页不做猜测。

## 依赖关系

- 宿主类：`Helpers.BoardGameHelper` 与本枚举同文件（`TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs:5`），那个静态类没有任何成员，只做命名空间锚点
- 唯一消费者：[BoardGameAIBase](../BoardGameAIBase) 的构造函数参数、`protected Difficulty` 属性、`SetDifficulty(AIDifficulty)` 与抽象方法 `InitializeDifficulty()` 是这个枚举在 1.4.5 里的全部落点
- 同文件兄弟：`BoardGameState`（`None / Win / Loss / Draw`）与本枚举互不引用，只是共处一个文件
- 思考时序：`BoardGameAIBase.UpdateThinkingAboutMove(float)` / `CanMakeMove()` / `ResetThinking()` 构成难度生效后的运行循环，与 `AIDifficulty` 通过 `InitializeDifficulty()` 间接相连
- 棋局上下文：`MissionBoardGameLogic` 是 AI 构造时必须提供的另一个参数，决定 AI 面向哪一盘棋
- 桶首页：[campaign-ext API 分区](../)

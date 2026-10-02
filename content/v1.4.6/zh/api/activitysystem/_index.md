---
title: "activitysystem 桶 — 活动状态机 TaleWorlds.ActivitySystem（0 张类页）"
description: "activitysystem 桶只对应 TaleWorlds.ActivitySystem 一个命名空间。实测 7 个 .cs 文件、6 个命名空间级类型声明，可以全列。本页给出职责、可复跑的查法、ActivityManager 的已核实签名，以及「默认实现是测试替身」这个必须知道的陷阱。"
---
# activitysystem：活动状态机（`TaleWorlds.ActivitySystem`）

> **覆盖状态：本桶 0 张类页。**
> 本页是导览，不是待补的索引。页面上出现的类型名全部是纯文本，**没有任何一个指向尚未撰写的类页**。

## 这个桶在源码里对应什么

归属规则只有一条直落前缀 `TaleWorlds.ActivitySystem` → `activitysystem`，没有更长的规则来抢它。源码目录 `bannerlord-1.4.6/TaleWorlds.ActivitySystem/`，**本桶内容就是这一个命名空间，一个子命名空间都没有**。

它解决的问题一句话说完：**「玩家现在正在做哪件事」需要是一个别的系统也能查到的状态，而不是各自猜。** 「在村庄里」「在战斗里」「在行军途中」「在对话」原本散落在各处，谁想判断都得去问一堆对象；这个命名空间把它们收进一个带 id 的注册表。

**实测规模**：

| 口径 | 数值 |
| --- | --- |
| `.cs` 文件数（含 `Properties/AssemblyInfo.cs`） | 7 |
| 命名空间级类型声明数 | 6 |
| 声明该命名空间的 `.cs` 文件数 | 6 |
| 子命名空间数 | 0 |

6 个类型就是全部，**不是节选**。

## 读源码：可复跑的查法

在工作区根目录执行：

```bash
find bannerlord-1.4.6/TaleWorlds.ActivitySystem -name '*.cs' | wc -l

grep -rl '^namespace TaleWorlds.ActivitySystem' bannerlord-1.4.6/TaleWorlds.ActivitySystem --include='*.cs'

awk '/^\t(public |internal |abstract |sealed |static |partial |unsafe |readonly |new )*(class|struct|interface|enum|record|delegate)[ \t]+[A-Za-z_]/' \
  $(find bannerlord-1.4.6/TaleWorlds.ActivitySystem -name '*.cs')

# 核对 ActivityManager 的真实成员
grep -vE '^\s*//' bannerlord-1.4.6/TaleWorlds.ActivitySystem/ActivityManager.cs
```

**口径定义**：`.cs 文件数` = `find <目录> -name '*.cs' | wc -l`；`命名空间级类型声明数` = 该目录内缩进恰好一个制表符的类型 / 委托声明行数，**不含嵌套类型**。

## 什么时候会碰到它

**日程 / 活动 / 作息类 mod 会直接需要它；其余 mod 用不上。**

1. **「NPC 每天几点在做什么」** —— 你要定义活动（睡觉、吃饭、训练、赶路），让地图上的行为、对话选项、部队 AI 都读同一份活动状态。这正是本桶的设计目的。
2. **「根据玩家在做什么改变数值」** —— 疲劳、饥饿、心情这类按活动结算的机制。
3. **「我要给一个活动加条件」** —— 判断某个活动此刻是否可用、能否开始。

**用不到它的典型 mod**：加物品定义、加 UI 界面、改战斗逻辑、改战役行为。这些走 [core](../core)、[gui](../gui)、[mission](../mission)、[campaign](../campaign) 四个桶就够了。

**心智模型**：把活动当成**一个带 id 的全局状态标签**。`Activity` 类型的四个属性就是它的全部状态：`Id`、`IsCompleted`、`IsInProgress`、`IsAvailable`。三个动词构成完整用法：

- `StartActivity(string activityId)` → `bool` — 声明「玩家从现在起在做这件事」
- `EndActivity(string activityId, ActivityOutcome outcome)` → `bool` — 声明「这件事结束了，结果如何」
- `GetActivity(string activityId)` → `Task<Activity>` — 问「这件事现在处于什么状态」，**异步返回，要先 await**

另外两个辅助入口：`SetActivityAvailability(string activityId, bool isAvailable)` → `bool` 控制可用性，`GetActivityTransition(string activityId)` → `ActivityTransition` 读状态迁移。

关键在于**所有 mod 共用这一个注册表**。你的活动 id 如果和别人的撞了，行为会互相干扰——这是本桶设计上没有隔离层的代价，取 id 时应当加自己的前缀。

## 一个必须知道的陷阱：默认实现是测试替身

`ActivityManager.ActivityService` 的**属性初始值是 `new TestActivityService()`**。也就是说，**在没有任何人注入真实实现之前，你调 `StartActivity` 走的是测试替身，不会真正生效。**

正确的心智模型：`ActivityManager` 是个**门面（facade）**，它把静态调用转给 `ActivityService`；真正干活的是 `IActivityService` 的实现。所以：

- 你的 mod 应该**通过 `ActivityManager` 调用**，不要自己 `new` 一个 `IActivityService`。
- 但也要知道默认状态是个测试替身。真正的实现在游戏本体的启动流程里被注入；如果你在测试环境或过早的时机调用，看到「没反应」先怀疑这一点，而不是怀疑你的代码。

[achievementsystem](../achievementsystem) 的 `AchievementService` 有**完全一样的模式**——两个桶是照着同一个门面 + 服务替身的设计做的。

## 本桶的 6 个类型（全部核实，未撰写类页）

下面每个名字都用 `grep -rw` 在 `bannerlord-1.4.6/TaleWorlds.ActivitySystem/` 核实过。**它们全部没有类页**：

- `ActivityManager` — 静态门面，本桶唯一该先写的类型。成员见上面「什么时候会碰到它」。
- `IActivityService` — 真正干活的接口。已核实的成员：`StartActivity` / `EndActivity` / `SetAvailability` / `GetActivity`（返回 `Task<Activity>`）/ `GetActivityTransition` / `IsInitializationCompleted()`。实现方是游戏本体的启动流程，不是给 mod 的扩展点。
- `Activity` — 一个活动的状态对象；由 `GetActivity` 异步返回，拿到之前要 `await`。
- `ActivityOutcome` — 活动结束的结果枚举，`EndActivity` 的第二个参数。
- `ActivityTransition` — 活动的状态迁移信息，由 `GetActivityTransition` 同步返回。
- `TestActivityService` — `IActivityService` 的测试替身，也就是 `ActivityService` 的默认值。这条得写进文档，否则读者会以为自己代码写错了。

## 桶间分工

| 你想做的事 | 该去哪个桶 |
| --- | --- |
| 定义「此刻在做什么」的全局状态 | **本桶** |
| 按名字存取整数统计值 | [achievementsystem](../achievementsystem) |
| 声明 mod 入口、挂战役行为 | [core](../core) · [campaign](../campaign) |
| 推屏 / 弹屏 / 输入限制 | [gui](../gui) |
| 战斗内单位与行为 | [mission](../mission) |

[achievementsystem](../achievementsystem) 是与本桶同构的另一半，两页互链。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 桶名 ↔ 命名空间的权威对照
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
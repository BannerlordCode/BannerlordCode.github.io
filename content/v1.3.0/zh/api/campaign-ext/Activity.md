---
title: "Activity"
description: "活动系统 DTO：4 个 public get/set 属性（Id + 三个 bool 状态位），是 IAchievementService 之外那条平行服务链路的返回体；默认服务 TestActivityService 永远返回 new Activity() 全 false，1.3.0 托管树里零 new。"
---

# Activity

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public class Activity`
**Base:** 无
**File:** `TaleWorlds.ActivitySystem/Activity.cs`

## 概述

`Activity` 是「活动」系统（Achievement 那一套的姊妹系统，都是平台成就/活动服务的托管侧门面）的数据载体。全文 28 行，4 个属性，**没有方法、没有构造函数、没有特性**：

```csharp
public class Activity
{
    public string Id { get; set; }
    public bool IsCompleted { get; set; }
    public bool IsInProgress { get; set; }
    public bool IsAvailable { get; set; }
}
```

四个成员的设计意图可以从命名读出来：`Id` 是活动标识；三个 bool 是**三个正交维度而不是三段流程**——「可参与」（`IsAvailable`）、「进行中」（`IsInProgress`）、「已完成」（`IsCompleted`）。它们可以同时为 false（未开放且没在跑）、同时为 true（一个跑完的活动仍可参与）。

**这个类型在 1.3.0 托管树里被 new 过一次，只有一处**：`TaleWorlds.ActivitySystem/TestActivityService.cs` 里的 `Task.FromResult<Activity>(new Activity())`。

## 心智模型

把它当成 [ActivityManager](../ActivityManager) 的返回值实体。管理器本体只有六个转发方法（`ActivityManager.cs` 全文）：

```csharp
public static IActivityService ActivityService { get; set; } = new TestActivityService();

public static bool StartActivity(string activityId)      { return ActivityService.StartActivity(activityId); }
public static bool EndActivity(string activityId, ActivityOutcome outcome) { return ActivityService.EndActivity(activityId, outcome); }
public static bool SetActivityAvailability(string activityId, bool isAvailable) { return ActivityService.SetAvailability(activityId, isAvailable); }
public static Task<Activity> GetActivity(string activityId) { return ActivityService.GetActivity(activityId); }
public static ActivityTransition GetActivityTransition(string activityId) { return ActivityService.GetActivityTransition(activityId); }
```

`ActivityManager` 自己**不持有任何 `Activity` 状态**——它是纯转发器。三个写方法（`StartActivity` / `EndActivity` / `SetActivityAvailability`）返回 `bool`，只调 `GetActivity(string)` 这一个方法把 `Activity` 交出来，而且返回的是 `Task<Activity>`。

所以整条链路是：**`string` 活动 ID 进，`Activity` 对象出（或 `bool` 成功标志出）**。ID 是这套系统的真实主键，`Activity` 只是把平台侧关于这个 ID 的三个状态位读回来的快照。

**三个状态位由谁写。** 由 `IActivityService` 的实现写，而这个实现在 1.3.0 里只有 `TestActivityService`——它是全假的（第 10-13 行）：

```csharp
bool IActivityService.StartActivity(string activityId)      { return true; }
bool IActivityService.EndActivity(string activityId, ActivityOutcome outcome) { return true; }
Task<Activity> IActivityService.GetActivity(string activityId) { return Task.FromResult<Activity>(new Activity()); }
bool IActivityService.SetAvailability(string activityId, bool isAvailable) { return true; }
```

`GetActivity` 返回的是**每次调用现 new 一个的空对象**：`Id` 为 null、三个 bool 全 false。真正的实现在 `TaleWorlds.MountAndBlade/Module.cs:1013` 被换上去：`ActivityManager.ActivityService = platformServices.GetActivityService();`

1.3.0 里这套系统**只有一个真实使用者**，就是主线任务阶段进度：`StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs:116-117` 开，`StoryMode/StoryModePhases/ThirdPhase.cs:103/107/111` 关。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public string Id { get; set; }` | 活动标识。管理器侧所有方法都是拿 `string activityId` 去问平台的，**DTO 的 `Id` 不参与查询**，只是回读时告诉你「这份状态属于谁」。默认服务返回的对象里它是 `null`，所以**不要用 `GetActivity(x).Result.Id` 去校验 x 是否存在**——那会拿到 null 而不是报错。 |
| `IsAvailable` | `public bool IsAvailable { get; set; }` | 该活动当前是否可参与。由 `SetActivityAvailability(id, bool)` 那一侧决定。 |
| `IsInProgress` | `public bool IsInProgress { get; set; }` | 该活动是否正在进行。由 `StartActivity(id)` 之后平台回报的状态决定，**不是** `StartActivity` 的 `bool` 返回值——返回 `true` 只表示平台接受了这次调用。 |
| `IsCompleted` | `public bool IsCompleted { get; set; }` | 该活动是否已完结。由 `EndActivity(id, outcome)` 之后平台回报。`EndActivity` 的 `outcome` 参数是 [ActivityOutcome](../ActivityOutcome)（`Abandoned` / `Failed` / `Completed` 三值），**`IsCompleted` 只对应第三个**，前两个 outcome 会让 `IsCompleted` 保持 false——`Abandoned` 和 `Failed` 在这个 DTO 上没有任何可区分的标记。 |

## 真实示例

官方唯一的用法链，打开再关掉主线任务活动（`StoryMode/StoryModePhases/ThirdPhase.cs:103/107/111`，按 outcome 分三种）：

```csharp
using TaleWorlds.ActivitySystem;

// TutorialPhaseCampaignBehavior.cs:116-117 —— 开启
ActivityManager.SetActivityAvailability("CompleteMainQuest", true);
ActivityManager.StartActivity("CompleteMainQuest");

// ThirdPhase.cs —— 结束时按结果给不同 outcome
ActivityManager.EndActivity("CompleteMainQuest", ActivityOutcome.Completed);
ActivityManager.EndActivity("CompleteMainQuest", ActivityOutcome.Failed);
ActivityManager.EndActivity("CompleteMainQuest", ActivityOutcome.Abandoned);
```

活动 ID `"CompleteMainQuest"` 是纯字面量约定，**没有任何注册表**——`StartActivity` 传进去的字符串平台侧不认就什么都不发生，返回 `true`（默认真实服务里大概是 `false`）。

读状态（`GetActivity` 返回 `Task`，必须 await）：

```csharp
using TaleWorlds.ActivitySystem;

// 无平台服务时 activity 是一个全 false 的空对象，
// 所以这里返回 false —— 而不是因为 "CompleteMainQuest" 没注册。
public static async System.Threading.Tasks.Task<bool> IsMainQuestRunning()
{
    Activity activity = await ActivityManager.GetActivity("CompleteMainQuest");
    if (activity == null)
    {
        return false;
    }

    return activity.IsAvailable || activity.IsInProgress;
}
```

**上面这段代码有一个必须知道的陷阱**：默认服务每次都返回新对象，所以 `IsInProgress` 永远 false。想知道「平台侧真实状态」，前提是 `ActivityManager.ActivityService` 已经被换成真实服务。想在 mod 里确认这一点：

```csharp
using TaleWorlds.ActivitySystem;

public static async System.Threading.Tasks.Task LogRealActivityState()
{
    // IsInitializationCompleted 只有 IActivityService 上有，ActivityManager 没有转发它。
    if (!ActivityManager.ActivityService.IsInitializationCompleted())
    {
        return;
    }

    Activity real = await ActivityManager.GetActivity("CompleteMainQuest");
    bool running = real != null && real.IsInProgress;
    System.Console.WriteLine("CompleteMainQuest in progress: " + running);
}
```

## 风险与边界

- **默认服务返回的是 `new Activity()`，不是查到的状态。** `TestActivityService.GetActivity` 每次 `new` 一个空对象，`Id` 为 null、三个 bool 全 false。**在 1.3.0 的普通桌面环境（无平台服务）里，`Activity` 的四个属性全部返回默认值。** 任何基于 `IsInProgress` 的 UI 逻辑在这套环境下会恒显示「没在跑」。这不是 bug，是平台服务缺失的正常表现，但排查时极易误判成「我的代码没生效」。
- **三个写方法返回 `true` 不代表状态变了。** `StartActivity` / `EndActivity` / `SetActivityAvailability` 在默认服务下全部 `return true`，是一次调用就被接受的意思。**状态是否真的落库，只能再 `GetActivity` 读回来确认**——而默认服务读回来永远是空的。
- **`ActivityOutcome` 的三个值只有两个能在 DTO 上区分。** `Abandoned` 与 `Failed` 传进 `EndActivity` 之后，`Activity` 上都没有对应字段能告诉你「是放弃还是失败」。需要这个区分就别走 `EndActivity`，自己在 mod 里记账。
- **`GetActivity` 阻塞等待有风险。** 它返回 `Task<Activity>`，而默认实现的 `Task.FromResult` 是同步完成的，但真实平台服务是异步 I/O。**把 `Task` 同步阻塞会在游戏主线程上卡帧甚至死锁**——引擎没有提供任何同步等待包装，正确做法只有 `await`，或把结果落到字段里在下一帧读。
- **`IsInitializationCompleted()` 不在 `ActivityManager` 上。** 它只在 `IActivityService` 接口上，管理器没有转发——要问就问 `ActivityManager.ActivityService.IsInitializationCompleted()`。这是判断「平台服务是否已就绪」的唯一入口。
- **`GetActivityTransition` 返回的不是 `Activity` 而是 [ActivityTransition](../ActivityTransition)**（`None` / `Singleplayer` / `Multiplayer`），默认服务恒返回 `Singleplayer`。**它描述的是「这套活动机制在哪种模式下生效」，不是某个具体活动的状态**，和 `Activity` 的三个 bool 是正交的两回事，别混在一个 `if` 里判断。
- **活动 ID 是无注册表的裸字符串。** `"CompleteMainQuest"` 只在两处字面量里出现，没有常量、没有校验、没有「未注册」的返回值。传错 ID 的表现是静默无效。
- **`TaleWorlds.ActivitySystem` 在文档工具链里被归为 noise 命名空间**（`tools/lib/handwritten-policy.mjs` 的 `isR1ExtraNoiseNamespace` 正则含 `TaleWorlds\.(?:AchievementSystem|ActivitySystem|...)`）。它有页面是因为人工深写绕开了自动分类器。

## 怎么用

### 怎么拿到它

`Activity` 是纯数据载体，声明在 `TaleWorlds.ActivitySystem/Activity.cs:6`，四个成员全是自动属性：`Id`（`:11`）、`IsCompleted`（`:16`）、`IsInProgress`（`:21`）、`IsAvailable`（`:26`）。

拿到实例的**唯一托管路径**是异步服务调用：

```
ActivityManager.GetActivity(activityId)              // ActivityManager.cs:33  → 转发到 :35
    → IActivityService.GetActivity(activityId)       // IActivityService.cs:16，返回 Task<Activity>
        → 平台实现，或默认的 TestActivityService
```

默认实现 `TestActivityService` 的 `GetActivity` 直接 `return Task.FromResult<Activity>(new Activity());`（`TestActivityService.cs:24`）——**返回一个字段全是默认值的空对象**，四个属性分别是 `null` / `false` / `false` / `false`。

这个类没有显式构造函数，但有自动属性，编译器会生成 `public` 无参构造，所以 `new Activity()` 本身也是可用的——只是那样得到的对象和上面那个空对象没有任何区别。

### 典型用法

因为默认值和「真的不可用」在字段上长得一模一样，读状态时必须先确认服务是不是真的：

```csharp
using System.Threading.Tasks;
using TaleWorlds.ActivitySystem;

public static async Task<string> DescribeActivityAsync(string activityId)
{
    // TestActivityService 返回 new Activity()（TestActivityService.cs:24），
    // 四个字段全是默认值。用它来识别「这台机器上根本没有真实活动服务」。
    if (ActivityManager.ActivityService is TestActivityService)
    {
        return "no-real-activity-service";
    }

    Activity activity = await ActivityManager.GetActivity(activityId);
    if (activity == null)
    {
        return "unknown-activity";
    }

    // Id 可能为 null：默认实现从不填它，所以先判空再拼进任何 key。
    string id = string.IsNullOrEmpty(activity.Id) ? activityId : activity.Id;

    if (activity.IsCompleted)
    {
        return id + ":completed";
    }

    if (activity.IsInProgress)
    {
        return id + ":in-progress";
    }

    return activity.IsAvailable ? id + ":available" : id + ":unavailable";
}
```

### 最容易踩的坑

**把 `Activity` 实例缓存下来，或者拿它和另一次调用返回的对象做引用比较。** `GetActivity` 每调一次都经过一次服务往返，而 `IActivityService` 的返回类型是 `Task<Activity>`（`IActivityService.cs:16`）——**它没有任何「同一实例」的保证**，契约里也没有 `Activity` 作为参数出现。所以两次调用返回的是两个独立对象，`ReferenceEquals` 为 false。后果：状态刚变过，你的缓存对象还是旧字段；而如果你用引用相等判断「有没有变化」，会得到「每次都在变」的错误结论。

第二个坑是默认实现让「不可用」和「没数据」无法区分。`TestActivityService` 返回的空对象里 `IsAvailable == false`（`Activity.cs:26` 的默认值），和平台侧真的告诉你这个活动不可用**在字段上一模一样**。后果是在本地／编辑器里跑的一段「不可用就不显示」的 UI 逻辑，永远走隐藏分支，你根本看不到它是否正确。

## 跨版本提示

`Activity.cs` 在 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树里**逐字节一致**：都是 28 行、同样 4 个 `public { get; set; }` 属性、同样的顺序（`Id` / `IsCompleted` / `IsInProgress` / `IsAvailable`）、同样的类型。跨 1.3 → 1.5 三个大版本公开面零变化——**没有任何字段被增删或改类型**。

`ActivityManager` 的形状也稳定：同样是 `ActivityService` 静态属性 + 五个转发方法 + 同样的默认值 `new TestActivityService()`，`StartActivity` / `EndActivity` / `SetActivityAvailability` / `GetActivity` / `GetActivityTransition` 的签名一字未改。同目录的 `ActivityOutcome`（`Abandoned` / `Failed` / `Completed`）与 `ActivityTransition`（`None` / `Singleplayer` / `Multiplayer`）两个枚举在这几棵树里也都是同样的三成员。

**结论：这段代码从 1.3.0 抄到 1.5.3 一个字符都不用改。** 而且由于默认服务的行为完全由 `TestActivityService` 决定、而它也没变，你在任何版本上遇到的「读出来都是 false」都是同一个现象，不会是版本差异。1.4.5 树是裁剪过的部分源码，无法作为对照。

## 依赖关系

- 唯一入口：[ActivityManager](../ActivityManager) 的 `GetActivity(string)` 是它唯一的产出路径，其余四个方法都不碰它
- 服务契约：[IActivityService](../IActivityService) 的 `Task<Activity> GetActivity(string activityId)` 是签名里唯一出现本类型的地方
- 默认实现：[TestActivityService](../TestActivityService) 是全假服务，`GetActivity` 恒返回 `new Activity()`
- 服务替换点：`TaleWorlds.MountAndBlade/Module.cs:1013` 的 `ActivityManager.ActivityService = platformServices.GetActivityService();`——引擎在模块加载时替平台注入，mod 只能在它之后覆盖静态属性
- 同构姊妹页：[Achievement](../Achievement) / [AchievementManager](../AchievementManager) / [IAchievementService](../IAchievementService) 是完全相同的「静态 Manager + 默认可替换服务」形状，两套系统互不引用
- 关联枚举：[ActivityOutcome](../ActivityOutcome)（`EndActivity` 的 outcome 参数）、[ActivityTransition](../ActivityTransition)（`GetActivityTransition` 的返回）
- 桶首页：[campaign-ext API 分区](../)
---
title: "ActivityManager"
description: "静态门面：五个方法全部转发给可替换的 IActivityService。默认 TestActivityService 的三个写方法恒返回 true、GetActivity 恒返回一个字段全空的 Activity、GetActivityTransition 恒为 Singleplayer——GetActivityTransition 不是 async 是个例外。"
---

# ActivityManager

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public class ActivityManager`
**Base:** 无（**不是 static class**，虽然只有静态成员）
**File:** `TaleWorlds.ActivitySystem/ActivityManager.cs`（45 行）

## 概述

与 [AchievementManager](../AchievementManager) 完全同构的静态门面，唯一区别是它多了一个**非 async** 的读取方法。全部 45 行：

```csharp
public class ActivityManager
{
    public static IActivityService ActivityService { get; set; } = new TestActivityService();

    public static bool StartActivity(string activityId)                          => ActivityService.StartActivity(activityId);
    public static bool EndActivity(string activityId, ActivityOutcome outcome)     => ActivityService.EndActivity(activityId, outcome);
    public static bool SetActivityAvailability(string activityId, bool isAvailable)=> ActivityService.SetAvailability(activityId, isAvailable);
    public static Task<Activity> GetActivity(string activityId)                   => ActivityService.GetActivity(activityId);
    public static ActivityTransition GetActivityTransition(string activityId)       => ActivityService.GetActivityTransition(activityId);
}
```

## 心智模型

**把它当成「平台成就/活动系统的写入闸门」。** 这个系统存在的意义在 1.3.0 的真实消费点上看得最清楚——整个托管树里只有 **4 处调用**，全在 StoryMode：

```csharp
// StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs:116-117
ActivityManager.SetActivityAvailability("CompleteMainQuest", true);
ActivityManager.StartActivity("CompleteMainQuest");

// StoryMode/StoryModePhases/ThirdPhase.cs:103 / 107 / 111
ActivityManager.EndActivity("CompleteMainQuest", 2);   // ActivityOutcome.Completed
ActivityManager.EndActivity("CompleteMainQuest", 0);   // ActivityOutcome.Abandoned
ActivityManager.EndActivity("CompleteMainQuest", 1);   // ActivityOutcome.Failed
```

也就是说：**它向平台侧通报「玩家开始/结束了主线」，而平台侧可能反过来弹一个「继续游戏」的邀请**——这正是 [AchievementManager](../AchievementManager) 旁边 `IActivityService` 还带一个 `ActivityTransition` 的原因。

三条规则：

**规则一：`GetActivityTransition` 是唯一同步的方法。** 它的返回类型 `ActivityTransition` 是三个值的枚举（`None` / `Singleplayer` / `Multiplayer`，见 [ActivityTransition](../ActivityTransition)），**不是 `Task`**。1.3.0 的托管树里**没有任何一处调用它**——它是给平台侧回调用的。把它 `await` 会编译失败（`await` 一个非 Task 类型只在有 awaiter 时成立，枚举没有）。

**规则二：`ActivityManager` 没有把 `IsInitializationCompleted` 转发出来。** [IActivityService](../IActivityService) 上有它（`TestActivityService.IsInitializationCompleted()` 恒 `true`），但本类不暴露。而 [AchievementManager](../AchievementManager) 的等待循环 `Module.cs:332` 是通过 `AchievementService.IsInitializationCompleted()` 直连的——**同一个 `Module.cs:1012-1013` 一次注入两个服务，但只有 Achievement 那个有等待循环**。

**规则三：`EndActivity` 的 outcome 参数官方自己传的是裸 int。** `ThirdPhase.cs:103/107/111` 写的是 `2` / `0` / `1`，而 [ActivityOutcome](../ActivityOutcome) 的定义是 `Abandoned = 0, Failed = 1, Completed = 2`。**`questCompleteDetail` 的原始值到 outcome 的映射是硬编码的数字对应关系**：`1 → Completed(2)`、`4/2/null → Abandoned(0)`、`3/5 → Failed(1)`。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `ActivityService` | `public static IActivityService ActivityService { get; set; } = new TestActivityService();`（`:11`） | 全局可替换槽位。**唯一写入方**是 `Module.cs:1013`。**没有任何访问保护**——任何代码都能在运行时换掉。 |
| `StartActivity` | `public static bool StartActivity(string activityId)`（`:15`） | 通知平台「activity 开始了」。`activityId` 是**自由字符串**，托管层没有任何白名单；引擎实际只用过 `"CompleteMainQuest"` 一个。**默认实现恒 `true`。** |
| `EndActivity` | `public static bool EndActivity(string activityId, ActivityOutcome outcome)`（`:21`） | 通知平台「activity 结束了」。注意方法名是 `EndActivity` 但接口方法名也是 `EndActivity`，**参数里的 `outcome` 在转发时原样传下去**。 |
| `SetActivityAvailability` | `public static bool SetActivityAvailability(string activityId, bool isAvailable)`（`:27`） | 通知平台这个 activity 当前是否可用。**注意方法名与接口名不同**：门面叫 `SetActivityAvailability`，`IActivityService` 上叫 `SetAvailability`（`ActivityManager.cs:28` 的转发目标）。 |
| `GetActivity` | `public static Task<Activity> GetActivity(string activityId)`（`:33`） | 异步读一个 [Activity](../Activity)。**`TestActivityService` 返回 `Task.FromResult(new Activity())`——`Id` / `IsCompleted` / `IsInProgress` / `IsAvailable` 四个字段全是 `default`**（`Id` 是 `null`，三个 bool 是 `false`）。 |
| `GetActivityTransition` | `public static ActivityTransition GetActivityTransition(string activityId)`（`:39`） | 同步读「这个 activity 应该走单人还是多人」。**1.3.0 托管树零调用点**。`TestActivityService` 恒返回 `ActivityTransition.Singleplayer`——**注意不是 `None`**，所以即使在默认实现下它也总是给出一个「去单人」的答案，而不是「我不知道」。 |
| （不存在的成员） | `IsInitializationCompleted` | 不在管理类上，只能 `ActivityManager.ActivityService.IsInitializationCompleted()`。 |
| （类本身的形状） | `public class`，无实例成员 | 与 [AchievementManager](../AchievementManager) 一样是普通 class，可以 `new` 出无用的实例。五个方法全是 `static`，没有 virtual 机会。 |

## 真实示例

**替换服务（mod 唯一能真正影响它的方式）：**

```csharp
using TaleWorlds.ActivitySystem;

public class MyActivityService : IActivityService
{
    public bool StartActivity(string activityId)
    {
        Debug.Print("start: " + activityId);
        return true;
    }

    public bool EndActivity(string activityId, ActivityOutcome outcome)
    {
        Debug.Print("end: " + activityId + " -> " + outcome);
        return true;
    }

    public bool SetAvailability(string activityId, bool isAvailable)
    {
        return true;
    }

    public Task<Activity> GetActivity(string activityId)
    {
        // 注意：必须自己填 Id，TestActivityService 返回的是 Id == null 的空壳
        return Task.FromResult(new Activity { Id = activityId, IsAvailable = true, IsInProgress = false, IsCompleted = false });
    }

    public bool IsInitializationCompleted()
    {
        return true;
    }

    // 这个方法是 public 的（不是显式接口实现），别漏
    public ActivityTransition GetActivityTransition(string activityId)
    {
        return ActivityTransition.Singleplayer;
    }
}
```

在 campaign 行为里用它（这与官方唯一的消费点形状一致）：

```csharp
using TaleWorlds.ActivitySystem;
using TaleWorlds.CampaignSystem;

public class MyTutorialPhaseBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 官方 TutorialPhaseCampaignBehavior.cs:116-117 就是这两行的形状
        ActivityManager.SetActivityAvailability("MyMod_MainQuest", true);
        ActivityManager.StartActivity("MyMod_MainQuest");
    }

    public override void OnTick()
    {
        // 注意：默认实现下这三个 bool 全是 true，等于什么都没发生
        if (ActivityManager.StartActivity("MyMod_MainQuest"))
        {
            Debug.Print("服务接受了，但不代表平台真的开始了一个 activity");
        }
    }
}
```

想读到 activity 的真实状态，必须自己判断 `Activity` 的字段是否被填过：

```csharp
using System.Threading.Tasks;
using TaleWorlds.ActivitySystem;

// GetActivity 是 async —— 调用方也必须是 async。
// 不要在主线程上用 .Result / GetAwaiter().GetResult() 阻塞等它。
private static async Task<bool> IsActivityLiveAsync(string id)
{
    Activity a = await ActivityManager.GetActivity(id);
    if (a == null || a.Id == null)
    {
        return false;   // TestActivityService 永远走这一支
    }
    return a.IsInProgress && !a.IsCompleted;
}
```

## 风险与边界

- **`GetActivityTransition` 不是 async。** 它是本类 5 个方法里唯一返回非 `Task` 的。`await ActivityManager.GetActivityTransition(id)` **编译不过**（枚举没有 awaiter），写 `ConfigureAwait` 也一样。别把它当成「忘了加 async 的版本」——它就是同步 API。
- **`GetActivityTransition` 在 1.3.0 托管树里零调用点。** 你在 mod 里第一个用它的时候，实际上是在使用一个引擎自己都没用过的 API——**它的行为由平台实现定义，跨平台/跨版本都可能变**。
- **`TestActivityService.GetActivity` 返回一个字段全空的 `Activity`。** `Id == null`、`IsAvailable == false`、`IsInProgress == false`、`IsCompleted == false`。**任何「读出来发现不可用」的逻辑在默认实现下永远为真**，而 `Id` 是 null 的话先解引用就 NRE。**务必先判 `a.Id == null`。**
- **`TestActivityService.GetActivityTransition` 返回 `Singleplayer` 而不是 `None`。** 这意味着默认实现下「未知」被伪装成「去单人游戏」。如果你用它决定「要不要提示玩家切多人」，在没接平台服务时**永远提示切到单人**——一个静默的错误默认值。
- **三个写方法的返回值全是「服务是否接受」，不是「平台是否真的做了」。** `TestActivityService` 的 `StartActivity` / `EndActivity` / `SetAvailability` 三个实现体都是 `return true;`。`TutorialPhaseCampaignBehavior.cs:116-117` 忽略了返回值——这是官方示范用法。
- **方法名在门面和接口之间不一致。** 门面 `SetActivityAvailability` ↔ 接口 `SetAvailability`。自己实现 `IActivityService` 时**方法名必须跟接口写**（`SetAvailability`），否则编译不过——这是最常见的实现失败点。
- **`IsInitializationCompleted` 没有被转发，也没有等待循环。** 引擎在 `Module.cs:1012-1013` 一次注入两个服务，但 `Module.EnsureAsyncJobsAreFinished`（`Module.cs:323-336`）**只等 `AchievementService`**，不等 `ActivityService`。所以即使你的 `IActivityService.IsInitializationCompleted()` 返回 `false`，引擎也不会等——**这个接口成员在本版本里对引擎行为零影响**。
- **`ActivityService` 是无保护的 public static set，与 [AchievementManager](../AchievementManager) 的 `AchievementService` 在同一行被赋值。** 两个 mod 各自替换时都是「后执行者静默覆盖」，没有链式。
- **`activityId` 没有白名单，但也不该随便用。** 托管层只有 `"CompleteMainQuest"` 一个真实取值；`TestActivityService` 对任意字符串都返回 `true`，所以**写错 id 在开发期完全看不出来**，到接了平台服务才会失败。
- **`ActivityManager` 不是静态类。** `new ActivityManager()` 能编译，得到一个什么也不做的对象。五个方法全是 `static`，继承没有 virtual 切入点。

## 跨版本提示

- **7 条 public 声明（类 + 1 属性 + 5 方法）在 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 上逐字相同**，`bannerlord-1.4.5` 是残缺树（无 `TaleWorlds.ActivitySystem/ActivityManager.cs`）。**没有一个方法被改名、被加参数或被删**，`GetActivityTransition` 的同步形状在所有版本里都保持。
- **[ActivityOutcome](../ActivityOutcome)（`Abandoned=0, Failed=1, Completed=2`）与 [ActivityTransition](../ActivityTransition)（`None/Singleplayer/Multiplayer`）的值也没变**，所以 `ThirdPhase.cs` 里那些裸字面量在 1.5.3 上依然对应正确的 outcome。
- **`TestActivityService` 与 `IActivityService` 的成员集合也没有变化**（5 个成员，其中 `GetActivityTransition` 是 public、其余四个是显式接口实现）。
- **对 mod 的实际含义：** 从 1.3.0 升到 1.5.3，这个类的调用代码一行都不用改。唯一要留意的是「平台实现」那一侧（Steam 等）会随游戏版本变，而 `GetActivityTransition` 的具体返回值完全由它决定——**1.3.0 的托管源码里看不到任何关于这些值的线索**。

## 依赖关系

- 服务接口：[IActivityService](../IActivityService)（同桶，5 个成员）
- 默认实现：[TestActivityService](../TestActivityService)（同桶）——`GetActivityTransition` 是 public，其余四个是显式接口实现（`bool IActivityService.StartActivity(...)`）
- 值类型：[Activity](../Activity)（4 个可读写属性，无方法）、[ActivityOutcome](../ActivityOutcome)、[ActivityTransition](../ActivityTransition)
- 注入时机：[Module](../../core/Module) 的 `Module.cs:1013`，与 `AchievementManager.AchievementService = ...` 相邻一行（`:1012`）
- 唯一消费方：`TutorialPhaseCampaignBehavior`（`StoryMode/GameComponents/CampaignBehaviors/`）与 `ThirdPhase.CompleteThirdPhase`（`StoryMode/StoryModePhases/ThirdPhase.cs:99-115`）
- 同构类：[AchievementManager](../AchievementManager)（`TaleWorlds.AchievementSystem`），[IAchievementService](../IAchievementService) / [TestAchievementService](../TestAchievementService)
- 桶首页：[campaign-ext API 分区](../)

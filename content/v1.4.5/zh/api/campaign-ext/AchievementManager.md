---
title: "AchievementManager"
description: "成就系统的静态门面：三个转发方法加一个可替换的 AchievementService 属性，默认实现是永远返回 true / 0 的 TestAchievementService。"
---

# AchievementManager

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public class AchievementManager`
**Base:** 无（全部成员为静态）
**File:** `TaleWorlds.AchievementSystem/AchievementManager.cs`

## 概述

这是一个 28 行的纯静态门面。真正干活的是 `IAchievementService` 接口（`bool SetStat(string, int)` / `Task<int> GetStat(string)` / `Task<int[]> GetStats(string[])` / `bool IsInitializationCompleted()`），`AchievementManager` 把其中三个方法原样转发到 `AchievementService` 属性上。这个类**不缓存、不排队、不做失败重试、不抛异常包装**——它就是一层命名空间前缀。

**最该知道的一件事在静态构造函数里**：`AchievementService = new TestAchievementService();`。也就是说**开箱状态下这个门面连的是测试实现**——`SetStat` 恒返回 `true`，`GetStat` 恒返回 `0`，`GetStats` 恒返回一个全零数组。真正的平台服务（Steam / 成就后端）必须由外部在某个时刻替换 `AchievementService` 才能生效；不替换的话，mod 里所有成就调用都会「成功但什么都不发生」。

第二个该知道的：`AchievementManager` **没有转发 `IsInitializationCompleted()`**。接口有四个成员，门面只暴露三个。想问后端是否就绪，必须自己 `((IAchievementService)AchievementManager.AchievementService).IsInitializationCompleted()`。

## 心智模型

把它当成「**一个可插拔后端的转发层**」，判断一段成就代码能不能工作只需要问两个问题：谁替换了 `AchievementService`？替换发生在什么时候？

替换入口只有一个——`public static IAchievementService AchievementService { get; set; }`，它的 setter 是公开的。任何代码都能换掉它，而且**没有 Dispose、没有还原、没有调用顺序保证**。所以正确的用法是「尽早、且只换一次」。如果在服务已经初始化之后再换，前一个后端持有的资源不会被释放。

第二个心智锚点是**类型声明与实际形态的错位**。类声明是 `public class AchievementManager`，不是 `static class`，所以它**可以被 `new AchievementManager()` 实例化出一个毫无作用的对象**（编译器会给一个隐式公开构造器）；但所有成员都是静态的，实例上什么也访问不到——必须写 `AchievementManager.SetStat(...)`。不要写 `new AchievementManager().SetStat(...)`。

第三个锚点是**异步方法被 `async`/`await` 直接透传**。`GetStat` 与 `GetStats` 都是 `public static async Task<...>`，内部只有一句 `return await AchievementService.GetStat(name);`。这意味着**它们不阻塞**——同步代码里必须 `.Result` 或 `await`，而 `.Result` 在 Unity 主线程上遇到未完成的 Task 会直接卡死。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AchievementService` | `public static IAchievementService AchievementService { get; set; }` | **真正的扩展点**。getter 读取当前后端，setter 无条件替换且不做任何旧后端的清理。静态构造时它被初始化为 `new TestAchievementService()`——一个三个方法全是假值的测试实现。这是判断「成就为什么没生效」的第一现场。 |
| `SetStat` | `public static bool SetStat(string name, int value)` | 写一个命名统计值，返回是否被后端接受。**同步方法**。默认后端恒返回 `true`——所以「返回 true」不代表数据被存储了，只代表测试实现没拒绝。 |
| `GetStat` | `public static async Task<int> GetStat(string name)` | 读回单个统计值。**是 `async Task<int>`，不是 int**。默认后端恒返回 0。内部只有一句 `await AchievementService.GetStat(name)`，没有任何超时或异常包装。 |
| `GetStats` | `public static async Task<int[]> GetStats(string[] names)` | 批量读。默认后端返回 `Task.FromResult(new int[names.Length])`——**长度对得上、全是 0**。批量版的价值在于少一次往返；如果你只需要一两个值，用 `GetStat` 更省事。 |
| 静态构造 | `static AchievementManager()` | 唯一有实质逻辑的地方：`AchievementService = new TestAchievementService();`。它由 CLR 保证只跑一次，**时机是首次访问本类任何静态成员时**——也就是说如果没人碰过 `AchievementManager`，这个默认后端根本还没被建出来。 |

## 真实示例

换掉默认的测试后端——这是让成就真正生效的唯一途径：

```csharp
public class MySteamAchievementService : IAchievementService
{
    public bool SetStat(string name, int value)
    {
        // 这里接真实的成就后端；返回 false 表示后端拒绝了这个写入
        Debug.Print("set stat " + name + " = " + value, 0);
        return true;
    }

    public Task<int> GetStat(string name)
    {
        return Task.FromResult(0);
    }

    public Task<int[]> GetStats(string[] names)
    {
        return Task.FromResult(new int[names.Length]);
    }

    public bool IsInitializationCompleted()
    {
        return true;
    }
}

public static void InstallRealAchievements()
{
    AchievementManager.AchievementService = new MySteamAchievementService();
}
```

写一个统计值。**返回 true 未必意味着被存了**——默认后端永远返回 true：

```csharp
bool accepted = AchievementManager.SetStat("defeated_bandits", 42);
Debug.Print("backend accepted = " + accepted, 0);
```

读回来。注意 `GetStat` 是 `Task<int>`，同步代码里 `.Result` 会在后端尚未完成时卡住主线程：

```csharp
public static async Task PrintStat(string name)
{
    int value = await AchievementManager.GetStat(name);
    Debug.Print(name + " = " + value, 0);
}
```

批量读，并显式处理长度：

```csharp
public static async Task PrintAllStats(string[] names)
{
    int[] values = await AchievementManager.GetStats(names);

    if (values.Length != names.Length)
    {
        Debug.Print("length mismatch, backend is misbehaving", 0);
        return;
    }

    for (int i = 0; i < names.Length; i++)
    {
        Debug.Print(names[i] + " = " + values[i], 0);
    }
}
```

门面**没有转发** `IsInitializationCompleted`，要问只能自己转回接口：

```csharp
public static bool IsBackendReady()
{
    IAchievementService service = AchievementManager.AchievementService;
    if (service == null)
    {
        return false;
    }

    return service.IsInitializationCompleted();
}
```

识别「我还在默认测试后端上」——`TestAchievementService` 是唯一的公开实现，类型判断比试写一个值再读回来更可靠：

```csharp
public static bool IsUsingTestBackend()
{
    return AchievementManager.AchievementService is TestAchievementService;
}
```

## 风险与边界

- **默认接的是测试后端。** 静态构造里 `AchievementService = new TestAchievementService();` 意味着开箱状态下 `SetStat` 恒 true、`GetStat` 恒 0。**「成就代码没报错但统计永远不动」就是这个原因。**
- **`AchievementService` 的 setter 无条件替换。** 没有 Dispose、没有「已初始化就拒绝替换」的守卫。晚替换会让前一个后端的资源泄漏。
- **两个读方法是 `async Task`。** 同步上下文里 `.Result` 有卡死主线程的风险；正确做法是 `await`。
- **`IsInitializationCompleted` 没有被门面转发。** 必须自己转成 `IAchievementService` 才能调。
- **没有异常包装。** 后端抛出的异常会原样冒到调用点；`SetStat` 在同步方法里抛出会直接打断调用链。
- **`TestAchievementService` 用显式接口实现。** 它的四个方法都是 `bool IAchievementService.SetStat(...)` 这种写法，**实例上没有公开方法**——所以 `new TestAchievementService().SetStat(...)` 编译不过，必须先转型成接口。
- **类不是 `static class`。** 可以被 `new AchievementManager()` 造出一个无意义实例（编译器生成的公开构造器），但实例上访问不到任何成员。
- **`GetStats` 返回的数组长度由后端决定。** 默认后端按入参长度造全零数组，自定义后端可能返回不等长的数组——调用方应自己校验。
- **`SetStat` 返回 bool 但没有语义约定。** 默认实现恒 true，无法用它区分「写入成功」与「后端根本没在工作」。
- **不参与存档。** 统计值由后端存储，不在 Bannerlord 的存档系统里；换后端等于换了一套存储。
- **不属于战役子系统。** 它在 `TaleWorlds.AchievementSystem` 程序集里，`Campaign.Current` 为 null 时照样可用。

## 依赖关系

- 后端契约：[IAchievementService](../IAchievementService) 定义四个成员，本类只转发其中三个；第四个 `IsInitializationCompleted()` 只能由调用方自行转型访问
- 默认实现：[TestAchievementService](../TestAchievementService) 是静态构造里装上的那个假后端，四个成员全部以显式接口实现形式提供
- 装配点：`AchievementService` 的公开 setter 是全项目唯一能让成就真正生效的入口，调用时机应尽量早
- 使用方：`TaleWorlds.AchievementSystem` 程序集之外，模组与上层玩法代码通过 `AchievementManager.SetStat` / `GetStat` / `GetStats` 与后端交互
- 同程序集邻居：`AchievementsCampaignBehavior`（`Modules.StoryMode`）是主线战役侧登记成就位的官方行为，它与本类的关系是「谁填统计」对「后端存哪」
- 与战役模型无关：本类不依赖 `Campaign` / `SaveManager`，也不被任何 `MBGameModel` 引用
- 桶首页：[campaign-ext API 分区](../)

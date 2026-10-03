---
title: "Achievement"
description: "成就 DTO：8 个 public get/set 属性，全部是纯数据；1.3.0 托管树里 new Achievement(...) 零出现，只由平台 AchievementService 反序列化填充，从来没有人读它的属性。"
---

# Achievement

**Namespace:** TaleWorlds.AchievementSystem
**Module:** TaleWorlds.AchievementSystem
**Type:** `public class Achievement`
**Base:** 无
**File:** `TaleWorlds.AchievementSystem/Achievement.cs`

## 概述

`Achievement` 是 Steam / GDK 成就系统往游戏里倒数据时用的载体。全文 48 行，8 个属性，**全部 `public string/int/bool { get; set; }`，没有方法、没有构造函数、没有特性、没有基类**。它是一个纯粹的、可序列化的数据袋。

8 个属性分三组：

| 属性 | 类型 | 语义 |
| --- | --- | --- |
| `Id` | `string` | 成就的机器标识，比如 `"CreatedKingdomCount"` |
| `LockedDisplayName` / `UnlockedDisplayName` | `string` | 未解锁 / 已解锁时的标题文案 |
| `LockedDescription` / `UnlockedDescription` | `string` | 未解锁 / 已解锁时的描述文案 |
| `TargetProgress` | `int` | 目标进度值 |
| `IsUnlocked` | `bool` | 是否已解锁 |
| `CurrentProgress` | `int` | 当前进度值 |

注意命名规则：文案分「锁定/解锁」两份、进度分「目标/当前」两份，所以**每一项都有两个字段**，UI 层拿到之后按 `IsUnlocked` 挑一个显示。

**这个类型在 1.3.0 托管源码树里零生产、零消费。** `grep -rn "new Achievement(" --include=*.cs .` 在 `bannerlord-1.3.0/` 下**零命中**；`grep -rn "\.TargetProgress\|\.UnlockedDisplayName\|\.LockedDescription" --include=*.cs .` 同样零命中。整个 `TaleWorlds.AchievementSystem` 工程只有 6 个文件，`Achievement` 是其中最没存在感的那个。

## 心智模型

要理解它，先理解它所在的那套系统真正的入口在哪儿——[AchievementManager](../AchievementManager)：

```csharp
// TaleWorlds.AchievementSystem/AchievementManager.cs
public static IAchievementService AchievementService { get; set; } = new TestAchievementService();

public static bool SetStat(string name, int value) { return AchievementManager.AchievementService.SetStat(name, value); }
public static async Task<int> GetStat(string name) { return await AchievementManager.AchievementService.GetStat(name); }
public static async Task<int[]> GetStats(string[] names) { return await AchievementManager.AchievementService.GetStats(names); }
```

**`AchievementManager` 的 API 面只有三个方法，全部以字符串 `name` 为键、全部 `int` 为值，一个 `Achievement` 对象都不经过。** 也就是说 `Achievement` 这个 DTO **不在主数据流上**——它是 `IAchievementService` 实现类（Steam/GDK 侧，不在这棵树里）内部的私有表示，引擎自己从不构造、也不消费它。

三条链要分清：

**链条一：游戏 → 平台（唯一真实存在的方向）。** 游戏侧只有「写」：`AchievementManager.SetStat("CreatedKingdomCount", 3)`。这句话**不是**操作 `Achievement`，而是转发给 `AchievementService.SetStat`。这个字符串键的来源是 `AchievementsCampaignBehavior` 里那 40 多个 `private const string XxxStatID` 常量，见 [AchievementsCampaignBehavior](../AchievementsCampaignBehavior)。

**链条二：平台 → 游戏（读回进度）。** `AchievementManager.GetStat(name)` 返回 `Task<int>`，还是整数，不是 `Achievement`。

**链条三：`Achievement` 本身。** 它只在 `IAchievementService` 实现内部被 new 和填充，然后用来构造平台侧的展示数据（标题/描述/进度条）。**这条链的两端都在引擎程序集之外的平台层**，托管侧只留下了这个 DTO 的定义。

所以对 mod 作者来说最实用的一条事实是：**你不需要碰 `Achievement`，你只需要 `AchievementManager.SetStat(string, int)`。** 写成字符串键、整数值的形状，是这套系统唯一的官方交互形状。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public string Id { get; set; }` | 成就的机器键。它与 `AchievementsCampaignBehavior` 里的 `XxxStatID` 常量字面量是**同一个命名空间**（如 `"CreatedKingdomCount"`、`"RadagosDefeatedInDuel"`）——行为写的是统计键，平台侧按同一个键匹配到一条成就定义，再把这条定义读成 `Achievement` 展示给玩家。 |
| `LockedDisplayName` | `public string LockedDisplayName { get; set; }` | 未解锁时显示的标题。成对存储是为了让 UI 不做 `if`，直接 `IsUnlocked ? UnlockedDisplayName : LockedDisplayName`。 |
| `UnlockedDisplayName` | `public string UnlockedDisplayName { get; set; }` | 已解锁时显示的标题。与 `LockedDisplayName` 同上，永远成对赋值。 |
| `LockedDescription` | `public string LockedDescription { get; set; }` | 未解锁时的描述文本，通常是达成条件的提示。 |
| `UnlockedDescription` | `public string UnlockedDescription { get; set; }` | 已解锁时的描述文本，通常是成就的战绩叙述。 |
| `TargetProgress` | `public int TargetProgress { get; set; }` | 达成所需的进度总量。**注意没有类型保证 `CurrentProgress <= TargetProgress`**，这个不变量靠平台侧保证。 |
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` | 解锁开关。UI 用它在两份文案间二选一，也是「这个成就是否已拿到」的唯一答案。 |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` | 当前进度。与 `TargetProgress` 一起构成进度条。 |

八个属性**全部带 public setter**——和 `TaleWorlds.Diamond` 里那些 `private set` 的 DTO 不同，这里的 setter 是开放的，说明它被设计成可以被平台层直接填充的对象（可能走反射或 Newtonsoft）。

## 真实示例

mod 加一条自己的成就统计，走的是 `AchievementManager` 而不是构造 `Achievement`：

```csharp
using TaleWorlds.AchievementSystem;

public class ModAchievementLedger
{
    // 与官方一致的命名形状：小驼峰、无前缀，和官方 40+ 个 XxxStatID 常量并排。
    private const string MyStatID = "MyModDefeatedHundredBandits";

    private int _localCount;      // 本地真相，存档时自己 SyncData

    public int LocalCount { get { return this._localCount; } }

    public void Advance()
    {
        this._localCount++;
        AchievementManager.SetStat(MyStatID, this._localCount);
    }

    // GetStat / GetStats 是 async Task<int>，引擎没有提供任何同步等待包装；
    // 想读平台侧只能 await。SetStat 是同步 bool，不需要 await。
    public async System.Threading.Tasks.Task<int> ReadBackFromPlatform()
    {
        return await AchievementManager.GetStat(MyStatID);
    }
}
```

**上面这段已经用 `_localCount` 做了自己记账——因为在 1.3.0 上 `GetStat` 的返回值在没有平台服务的机器上恒为 0。** 默认服务是 [TestAchievementService](../TestAchievementService)，它的 `GetStat` 直接 `return Task.FromResult<int>(0)`，且 `SetStat` 直接 `return true`（什么都不存）。所以：

- 在编辑器 / 无平台服务的环境下，`SetStat` 永远返回 `true`（假成功），`GetStat` 永远返回 `0`（假零）。
- 你**不能**靠 `GetStat` 的返回值来判断成就是否真的推进了，只能自己记账。

`Achievement` 这个类型本身在 mod 代码里不需要出现——真要出现，只会是「从某个平台服务手里接过来往自己 UI 上放」这种极边缘场景：

```csharp
// 假设某个平台服务给了你一个已填充的 Achievement（1.3.0 托管树里没有这样的调用点，
// 这段代码只在你自己实现了 IAchievementService 时才成立）。
private void OnAchievementReceived(Achievement achievement)
{
    string title = achievement.IsUnlocked
        ? achievement.UnlockedDisplayName
        : achievement.LockedDisplayName;

    int percent = achievement.TargetProgress <= 0
        ? 0
        : achievement.CurrentProgress * 100 / achievement.TargetProgress;

    InformationManager.DisplayMessage(new TextObject("{=A}" + title + "  " + percent + "%", null));
}
```

## 风险与边界

- **`Achievement` 在 1.3.0 托管树里零 new、零读。** 任何「构造一个 Achievement 塞进游戏」的想法在当前版本上没有落点——没有接收方。要用它，只能自己实现 `IAchievementService` 顶掉 `AchievementManager.AchievementService`。
- **`AchievementManager.AchievementService` 默认是 `TestAchievementService`，一个全假的服务。** 它的 `SetStat` 恒返回 `true`、`GetStat` 恒返回 `0`、`GetStats` 恒返回等长全零数组、`IsInitializationCompleted` 恒返回 `true`。真正的 Steam/GDK 服务在 `TaleWorlds.MountAndBlade/Module.cs:1012` 那一行注入：`AchievementManager.AchievementService = platformServices.GetAchievementService();`——**那是引擎在模块加载时替平台做的决定，mod 改不了启动时机**，只能在它之后覆盖属性（属性有 public setter，所以覆盖是合法的）。
- **`SetStat` 返回 `bool` 但语义是「平台接受了这次写入」，不是「写入成功且已持久化」。** 默认测试服务下它恒为 `true`，因此**返回值不能用来判断成就系统是否可用**。判断可用性要看 `IAchievementService.IsInitializationCompleted()`，而 `AchievementManager` 并没有转发这个方法——你得直接问 `AchievementManager.AchievementService.IsInitializationCompleted()`。
- **`GetStat` / `GetStats` 是 `async Task`，`SetStat` 是同步 `bool`，而且引擎没有提供任何同步等待包装。** 官方行为 `AchievementsCampaignBehavior` 自己都不调 `GetStat`（它只写不读，全靠本地 `_cachedXxx` 字段做去重）——这既是性能考虑，也是因为读回来没用（见下一条）。要读就 `await`；拿 `Task` 做同步阻塞会在有同步上下文时死锁。
- **读出来的值本身也不可信。** 默认服务 `TestAchievementService.GetStat` 直接 `return Task.FromResult<int>(0)`，无论你写过什么、写过多少次，`await GetStat(x)` 恒为 0。**所以「await 回来是 0」在无平台环境下不区分「没写进去」和「平台侧本来就是空的」——两种情况都返回 0。** 真正的进度只能自己记账。
- **统计键是纯字符串契约，没有常量表。** 40 多个键字面量全部硬编码在 `AchievementsCampaignBehavior` 的 `private const string` 里，平台侧按同样的字面量匹配。**拼错一个字母不会报错**，只是那个统计永远涨不起来，也不会有人通知你。所以自定义键必须避开官方命名空间。
- **`TargetProgress` 可能为 0 或负数，DTO 里没有约束。** 直接 `CurrentProgress * 100 / TargetProgress` 会抛 `DivideByZeroException`。算百分比必须先判分母。
- **`TaleWorlds.AchievementSystem` 在文档工具链里被归为 noise 命名空间**（`tools/lib/handwritten-policy.mjs` 的 `isR1ExtraNoiseNamespace` 正则含 `TaleWorlds\.(?:AchievementSystem|ActivitySystem|...)`）。它之所以还有页面，是因为人工深写绕开了自动分类器——别指望批量工具会重新生成它。

## 跨版本提示

`Achievement.cs` 在 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树里**逐字节一致**：都是 48 行、同样 8 个 `public { get; set; }` 属性、同样的顺序与命名，**没有任何字段被增删或改类型**。跨 1.3 → 1.5 三个大版本，公开面零变化。1.4.5 树是裁剪过的部分源码，无法作为对照。

`AchievementManager` 的形状也同样稳定：`AchievementService` 静态属性 + `SetStat` / `GetStat` / `GetStats` 三个方法，默认值仍是 `new TestAchievementService()`。

**因此 mod 侧的代码从 1.3.0 抄到 1.5.3 一个字符都不用改。** 唯一会变的是统计键的**数量**——`AchievementsCampaignBehavior` 在 1.5.3 里比 1.3.0 多了 `private void OnCharacterCreationOver(int index)` 和 `private void CollectMetadataEntries(List<KeyValuePair<string, string>> list)` 两个私有方法（`CampaignEvents.OnCharacterCreationIsOverEvent` 的委托签名在 1.5.3 变成了带 `int index` 的两参版本，见该页），意味着新版本会多写若干官方统计键。**这对你只有间接影响**：`AchievementsCampaignBehavior` 的 40 多个 `XxxStatID` 常量集合是官方键的完整清单，你自定义键时要用一个不会和它们撞名的前缀。

## 依赖关系

- 唯一入口：[AchievementManager](../AchievementManager) 的 `SetStat` / `GetStat` / `GetStats`——全部以字符串键 + 整数为形状，**不经过本类型**
- 默认实现：[TestAchievementService](../TestAchievementService) 是全假服务（写恒 true、读恒 0），由 `Module.cs:1012` 的 `platformServices.GetAchievementService()` 在真平台上被顶掉
- 服务契约：[IAchievementService](../IAchievementService) 定义 `SetStat` / `GetStat` / `GetStats` / `IsInitializationCompleted`，`Achievement` 的填充逻辑在这条契约的实现侧
- 统计键来源：[AchievementsCampaignBehavior](../AchievementsCampaignBehavior) 的 40 多个 `private const string XxxStatID`，与 `Id` 共用同一套键命名空间
- 服务替换示例页：[IActivityService](../IActivityService) 是完全同构的姊妹接口（同样的「静态 Manager + 默认可替换服务」形状），改服务注入点时可以对照着看
- 桶首页：[campaign-ext API 分区](../)
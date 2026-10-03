---
title: "CampaignMusicHandler"
description: "战役地图音乐处理器：每帧根据「附近文化 / 队伍士气 / 是否在联军 / 是否在海上」重算主题，并在 PSAI 报告播放中时淡出进入 30~120 秒休息。"
---

# CampaignMusicHandler

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public class CampaignMusicHandler : IMusicHandler`
**Base:** 无（直接实现 `TaleWorlds.MountAndBlade.IMusicHandler`）
**File:** `SandBox.View/SandBox.View/CampaignMusicHandler.cs`

## 概述

这是战役地图（大地图）音乐的全部决策逻辑。它实现 `IMusicHandler`，由 [MBMusicManager](../../mission-ext/MBMusicManager) 在每帧回调 `OnUpdated(dt)`；每帧做两件事——先把音乐模式从 `Paused` 拉到 `Campaign`（`CheckMusicMode`），再跑一次「播放 or 休息」的状态机（`TickCampaignMusic`）。它不持有歌曲、不持有播放列表，只持有**一个 float 计时器 `_restTimer`** 和**一个 PSAI 状态快照**。

主题的选择逻辑集中在 `MBMusicManager.Current.GetCampaignMusicTheme(culture, isDark, isWarMode, isAtSea)` 的四个入参上，而这四个值全部由本类的四个私有辅助方法现算：`GetNearbyCulture()` 找最近的城镇或村庄（村庄距离乘 1.05 惩罚），`GetMoodOfMainParty()` 把士气归一到 0~1 与 `MusicParameters.CampaignDarkModeThreshold` 比，`IsPlayerInAnArmy()` 看 `MainParty.Army != null`，`GetIsMainPartyAtSea()` 看 `MainParty.IsCurrentlyAtSea`。

## 心智模型

把它当成「**一个 float 驱动的两态振荡器**」，而不是一个音乐播放器。`_restTimer` 的符号就是状态：**`<= 0` 表示处于休息期（正在倒数），`> 0` 表示处于播放期**。整段逻辑因此只有两条分支：

- **休息分支**（`_restTimer <= 0`）：每帧 `_restTimer += dt`，一旦跨过 0 就 `StartThemeWithConstantIntensity(theme, false)` 启动主题曲。
- **播放分支**（`_restTimer > 0`）：先问 PSAI `PsaiCore.Instance.GetPsaiInfo().psaiState == (int)PsaiState.playing`。**若确实在播**，就 `ForceStopThemeWithFadeOut()` 并把 `_restTimer` 设成 `-(30f + MBRandom.RandomFloat * 90f)`，也就是随机 30~120 秒的休息；**若不在播**，什么都不做，音乐继续。

由此推出四个必须知道的结论。第一，**构造函数是 private 的**，`public static void Create()` 是唯一合法入口，它 `new` 出实例后调 `MBMusicManager.Current.OnCampaignMusicHandlerInit(this)`，后者同时写 `_campaignMusicHandler` 与 `_activeMusicHandler`。全树唯一的调用点是 `SandBox.View.Map/MapScreen.cs:362`，也就是**大地图屏幕自己负责装它**。第二，**两个接口成员都是显式实现**：`bool IMusicHandler.IsPausable => false` 和 `void IMusicHandler.OnUpdated(float dt)`。这意味着拿到实例后**不能写 `handler.OnUpdated(dt)`**，必须先转型成 `IMusicHandler`——而外部又拿不到实例。第三，**两个 rest 常量是死的**：`MinRestDurationInSeconds = 30f` 与 `MaxRestDurationInSeconds = 120f` 声明了但全类从未引用，`TickCampaignMusic` 里硬编码的是字面量 `(30f + MBRandom.RandomFloat * 90f)`。想改休息时长只能改这两行字面量，改常量无效。第四，**`IsPausable` 恒为 false**，战役音乐不随游戏暂停而停。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Create` | `public static void Create()` | 唯一的对外入口。`new` 出一个私有构造的实例并交给 `MBMusicManager` 接管。没有返回值、没有单例字段、没有重复调用保护——调两次会覆盖掉上一次注册的 handler。 |
| `IsPausable` | `bool IMusicHandler.IsPausable => false` | 显式接口实现，告诉 `MBMusicManager` 这个处理器**不接受暂停**。因为是显式实现，只能通过 `IMusicHandler` 引用读到，静态类型写成 `CampaignMusicHandler` 时访问不到。 |
| `OnUpdated` | `void IMusicHandler.OnUpdated(float dt)` | 每帧唯一入口，内部就是 `CheckMusicMode()` + `TickCampaignMusic(dt)` 两行。同样是显式实现，外部无法按具体类型直接调。 |
| `CheckMusicMode` | `private void CheckMusicMode()` | `(int)MBMusicManager.Current.CurrentMode == 0` 即 `MusicMode.Paused` 时调 `ActivateCampaignMode()`。**每帧执行**，所以从暂停菜单回到地图时音乐模式会被自动拉回 `Campaign`，不需要调用方干预。 |
| `TickCampaignMusic` | `private void TickCampaignMusic(float dt)` | 两态振荡器本体。**注意判断方向**：它在 `_restTimer > 0` 且 PSAI 报告 `PsaiState.playing` 时执行的是「停掉 + 进入休息」，而不是「继续播」。首次进入时 `_restTimer` 初值 0，第一帧就把主题拉起来；第二帧若 PSAI 已切到 `playing`，就会立刻淡出并进入 30~120 秒休息——实际观感取决于 PSAI 报告状态的时机。 |
| `GetNearbyCulture` | `private CultureObject GetNearbyCulture()` | 遍历 `Campaign.Current.Settlements`，只考虑 `IsTown || IsVillage`，按 `Position.DistanceSquared(MobileParty.MainParty.Position)` 取最近者，**村庄额外乘 1.05 作为惩罚**。找不到城镇村庄时返回 null，`GetCampaignMusicTheme` 会收到 null 文化。 |
| `GetMoodOfMainParty` | `private float GetMoodOfMainParty()` | `MathF.Clamp(MobileParty.MainParty.Morale / 100f, 0f, 1f)`。调用方拿它与 `MusicParameters.CampaignDarkModeThreshold`（读的是 `_parameters[17]`）比较，小于阈值就走「暗黑模式」主题。 |
| `IsPlayerInAnArmy` | `private bool IsPlayerInAnArmy()` | `MobileParty.MainParty.Army != null`。对应 `GetCampaignMusicTheme` 的 `isWarMode` 入参——**只是「在联军里」，不判断是否统帅、是否有战事**。 |
| `GetIsMainPartyAtSea` | `private bool GetIsMainPartyAtSea()` | `MobileParty.MainParty.IsCurrentlyAtSea`，对应主题选择的 `isAtSea` 入参。 |
| `_restTimer` | `private float _restTimer` | 唯一状态。符号即状态：`0` 是刚进地图（下一帧就播），`> 0` 是播放期，`-(30~120)` 是休息期倒数。**没有 setter，也没有对外读取入口**。 |
| `MinRestDurationInSeconds` / `MaxRestDurationInSeconds` | `private const float 30f` / `120f` | **死常量**。声明后全类零引用，实际休息时长由 `TickCampaignMusic` 里的字面量 `30f + MBRandom.RandomFloat * 90f` 决定。改常量不会有任何效果。 |

## 真实示例

注册战役音乐处理器——这是唯一合法的创建方式（构造函数是 private）：

```csharp
public static void InstallCampaignMusic()
{
    // 全树唯一的官方调用点在 SandBox.View.Map.MapScreen；
    // mod 若在自定义地图屏里重建大地图，需要自己补这一次注册
    CampaignMusicHandler.Create();

    Debug.Print("active handler registered, mode = " + MBMusicManager.Current.CurrentMode, 0);
}
```

如果你想替换它而不是叠加（官方 handler 不接受暂停，也没有暴露实例，只能整体顶掉）：

```csharp
public class MyCampaignMusicHandler : IMusicHandler
{
    private float _restTimer;

    public bool IsPausable => true;

    public void OnUpdated(float dt)
    {
        _restTimer += dt;
        if (_restTimer < 120f)
        {
            return;
        }

        _restTimer = 0f;
        MBMusicManager.Current.ActivateCampaignMode();
    }
}

// 注意：一旦注册，下面这行会把官方 handler 从 _activeMusicHandler 上顶掉
MBMusicManager.Current.OnCampaignMusicHandlerInit(new MyCampaignMusicHandler());
```

自己复刻「附近文化」的选择，好让自定义 UI 也能显示同一个判定（官方实现只有这十几行）：

```csharp
CultureObject nearest = null;
float bestDistanceSquared = float.MaxValue;

foreach (Settlement item in Campaign.Current.Settlements)
{
    if (!item.IsTown && !item.IsVillage)
    {
        continue;
    }

    float distanceSquared = item.Position.DistanceSquared(MobileParty.MainParty.Position);
    if (item.IsVillage)
    {
        distanceSquared *= 1.05f;
    }

    if (distanceSquared < bestDistanceSquared)
    {
        bestDistanceSquared = distanceSquared;
        nearest = item.Culture;
    }
}

float mood = MathF.Clamp(MobileParty.MainParty.Morale / 100f, 0f, 1f);

Debug.Print("nearest culture = " + nearest, 0);
Debug.Print("dark mode = " + (mood < MusicParameters.CampaignDarkModeThreshold), 0);
```

用同样的四个参数去问一次主题（不启动，只看会拿到哪个 `MusicTheme`）：

```csharp
MusicTheme theme = MBMusicManager.Current.GetCampaignMusicTheme(
    nearest,
    mood < MusicParameters.CampaignDarkModeThreshold,
    MobileParty.MainParty.Army != null,
    MobileParty.MainParty.IsCurrentlyAtSea);

Debug.Print("theme = " + theme, 0);
```

## 风险与边界

- **构造函数是 private 的。** `new CampaignMusicHandler()` 编译不过。想加行为只能写自己的 `IMusicHandler` 实现。
- **两个接口成员是显式实现。** 静态类型是 `CampaignMusicHandler` 时访问不到 `OnUpdated` / `IsPausable`；而外部又拿不到实例（`Create()` 返回 void、没有单例字段），所以实际上**外部既不能调用也不能读取**这个 handler。
- **`Create()` 没有幂等保护。** 重复调会覆盖 `MBMusicManager` 的 `_activeMusicHandler`，旧的 handler 直接被丢弃（不 Dispose、不回收）。
- **每帧读全量聚落。** `GetNearbyCulture` 每帧遍历 `Campaign.Current.Settlements` 算距离平方，大地图几百个聚落时是稳定的每帧开销，自己写替换实现时值得考虑缓存。
- **两个 rest 常量是死的。** `MinRestDurationInSeconds` / `MaxRestDurationInSeconds` 从不被读；真实时长在 `TickCampaignMusic` 的字面量里。
- **依赖 `psai.net`。** 判定「是否在播」用的是 `PsaiCore.Instance.GetPsaiInfo()` 与 `(int)PsaiState.playing == 2`。PSAI 尚未 ready（`notready`）或处于 `silence` / `rest` 时 `flag` 都是 false，表现为「不停歌、也不进休息」，音乐会一直挂着。
- **首次播放只有一帧。** 初值 `_restTimer == 0` 让第一帧无条件启动主题，紧接着若 PSAI 报 `playing` 就淡出。想避免这个抖动只能整体替换 handler。
- **主题选择的四个入参都是廉价的近似。** `isWarMode` 只看「在不在联军」，不看在不在打仗；`isDark` 只看士气阈值，不看是否被围困；`isAtSea` 只看 `IsCurrentlyAtSea`。
- **找不到城镇村庄时文化为 null。** `GetNearbyCulture` 初值就是 null，一个都不匹配时会把 null 传进 `GetCampaignMusicTheme`。
- **注册时机绑定大地图屏幕。** 官方在 `MapScreen.cs:362` 注册，进 mission 或换屏幕时由 `MBMusicManager` 的 `_activeMusicHandler` 切换接管，本类没有 finalize 钩子。
- **不参与存档。** `_restTimer` 与 handler 实例都不进存档。

## 依赖关系

- 宿主管理器：[MBMusicManager](../../mission-ext/MBMusicManager) 的 `OnCampaignMusicHandlerInit(IMusicHandler)` 注册、`CurrentMode` 观察、`ActivateCampaignMode()` 切换、`StartThemeWithConstantIntensity` / `ForceStopThemeWithFadeOut` / `GetCampaignMusicTheme` 四个播放原语全在它身上
- 接口契约：[IMusicHandler](../../mission-ext/IMusicHandler) 只有 `IsPausable` 与 `OnUpdated(float)` 两个成员，本类以显式实现提供
- 阈值来源：`TaleWorlds.MountAndBlade.MusicParameters` 的 `CampaignDarkModeThreshold` 读 XML 参数数组下标 17，决定士气多低算暗黑模式
- 播放状态源：`psai.net.PsaiCore.Instance.GetPsaiInfo().psaiState` 与 `psai.net.PsaiState` 枚举（`notready / silence / playing / rest`，`playing == 2`）
- 地图数据输入：[MobileParty](../../campaign/MobileParty) 的 `Position` / `Morale` / `Army` / `IsCurrentlyAtSea` 与 [Settlement](../../campaign/Settlement) 的 `IsTown` / `IsVillage` / `Position` / `Culture` 是四个私有辅助方法的全部数据来源
- 向量运算：`CampaignVec2.DistanceSquared(Vec2)` 与 `MathF.Clamp` 分别是「找最近聚落」与「归一士气」的原语
- 同宿主兄弟：`MapScreen`（`SandBox.View.Map`）是全树唯一的注册调用点，与本类同属 `SandBox.View` 程序集
- 战斗音乐对照：`Modules.Native/TaleWorlds.MountAndBlade.View.MissionViews.Sound/MusicBattleMissionView.cs:107` 用同一套 PSAI API 判定战斗音乐，可作对照阅读
- 桶首页：[campaign-ext API 分区](../)

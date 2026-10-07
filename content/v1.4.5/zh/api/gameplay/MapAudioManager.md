---
title: "MapAudioManager"
description: "大地图环境音的参数推送器：每帧 tick 但只推三个全局参数（Season/CampaignCameraHeight/Daytime），且三个 setter 参数常量里有一个声明了却从不使用。"
---

# MapAudioManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** SandBox
**Type:** `internal class MapAudioManager : CampaignEntityVisualComponent`
**Base:** `CampaignEntityVisualComponent`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapAudioManager.cs`

## 概述

`MapAudioManager` 是 85 行、7 个成员的大地图环境音参数推送器。它继承 [CampaignEntityVisualComponent](../../campaign-ext/CampaignEntityVisualComponent/)，每帧被 `OnVisualTick` 调一次，但**内部有三道缓存闸门**，只有当某个量真的变了才调 `SoundManager.SetGlobalParameter`。

它由 `MapScreen.cs:2221` 注册：

```csharp
SandBoxViewSubModule.SandBoxViewVisualManager.AddEntityComponent<MapAudioManager>();
```

注册后由 `SandBoxViewVisualManager.AddEntityComponent<TComponent>`（`:83`）建实例并调 `SortComponents()`（`:86` → `:115`）重排，排序依据是 `:14` 的 `_comparisonDelegate`：`x.Priority.CompareTo(y.Priority)`。**本类的 `Priority` 是 70**（`MapAudioManager.cs:24`），**升序排**。

## 心智模型

把它当成**「三个变化的边沿检测器」**。三条推论：

第一,**它推的是全局参数，不是音效。** 全部动作都是 `SoundManager.SetGlobalParameter(string, float)`（`bin/TaleWorlds.Engine/TaleWorlds.Engine/SoundManager.cs:80`，内部转发 `EngineApplicationInterface.ISoundManager.SetGlobalParameter`）。**它自己不播任何音效**，只是把「季节」「相机高度」「一天中的小时」三个数喂给音频引擎，由音频侧决定用哪个环境音层。

第二,**四个私有常量里有一个是死的。** `:16` 的 `WeatherEventIntensityParameterId = "Rainfall"` **在 `OnVisualTick` 里从未被使用**——该方法只处理 `Season`、`CampaignCameraHeight`、`Daytime` 三个。**换句话说，下雨强度的音频参数在这个版本里不会被这个组件推送。**

第三,**相机高度有 0.1 的滞回阈值。** `:68` 的 `Math.Abs(lastCameraZ - renderCameraPosition.Z) > 0.1f`。**这不是「变了就推」，是「变了超过 10 厘米才推」** —— 防止相机微抖导致每帧刷参数。季节与小时则是精确相等比较，**没有阈值**。

边界：**`internal` 类**，编译期不可引用；`Priority` 是 `public override`，但**因为类本身 internal，实际可访问性受限**。

## 如何使用

**怎么拿到它**：由 `MapScreen.cs:2221` 在地图屏幕初始化时注册，**没有 `new` 的外部入口**（`AddEntityComponent<T>` 是唯一路径，且 `T : CampaignEntityVisualComponent, new()`）。实例句柄可以从注册返回值拿，但官方调用点把它丢弃了。

同样的边沿检测逻辑，手写一个等价组件：

```csharp
using SandBox;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public class MyMapAudio : CampaignEntityVisualComponent
{
    // Priority 升序，数字越小越先 tick（SandBoxViewVisualManager.cs:14）
    public override int Priority => 71;

    private Seasons _lastSeason;
    private int _lastHour = -1;

    public override void OnVisualTick(MapScreen screen, float realDt, float dt)
    {
        CampaignTime now = CampaignTime.Now;
        if (now.GetSeasonOfYear != _lastSeason)
        {
            _lastSeason = now.GetSeasonOfYear;
            SoundManager.SetGlobalParameter("Season", (float)_lastSeason);
        }
        if ((int)now.CurrentHourInDay != _lastHour)
        {
            _lastHour = (int)now.CurrentHourInDay;
            SoundManager.SetGlobalParameter("Daytime", _lastHour);
        }
    }
}
```

**用它最容易踩的一条**：**`Daytime` 那段的判断条件在反编译产物里方向可疑。** `:76` 编译出来是

```csharp
if ((int)now.CurrentHourInDay == _lastHourUpdate)
```

——即「**小时没变时**才推参数」。**这与相邻两段的写法不一致**：季节段是 `:59` 的 `!= _lastCachedSeason`、相机段是 `:68` 的 `> 0.1f`，都表达「变了才推」；而 `_lastHourUpdate` 初值是 0（`:22`），若条件真是 `==`，则整个会话里只有小时为 0 那一帧会推送一次。**我判定这是反编译器把 `!=` 还原成了 `==`，但我没有阳性证据（没有另一版源码可比对），因此不下「源码就是 `!=`」的结论** —— 只陈述「编译产物如此」。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `SeasonParameterId` | `private const string SeasonParameterId = "Season"` | 季节参数名。**声明在 `:10`**；`:62` 推送时用的是字面量 `"Season"` 而非该常量（编译器把 `const` 内联了），**所以这个 `const` 在本类里没有真正的读取点**。 |
| `CameraHeightParameterId` | `private const string CameraHeightParameterId = "CampaignCameraHeight"` | 相机高度参数名。声明 `:12`，同样在 `:71` 被内联成字面量，**类内无读取点**。 |
| `TimeOfDayParameterId` | `private const string TimeOfDayParameterId = "Daytime"` | 一天时段参数名。声明 `:14`，同样在 `:79` 被内联，**类内无读取点**。 |
| `WeatherEventIntensityParameterId` | `private const string WeatherEventIntensityParameterId = "Rainfall"` | **声明了却从不使用的常量（`:16`）。** `OnVisualTick` 里没有任何一处引用它或 `"Rainfall"`。**结论：v1.4.5 的本组件不推送天气强度参数。** |
| `_lastCachedSeason` | `private Seasons _lastCachedSeason` | 季节缓存，初值为枚举默认值（`:18`）。`:59` 比较、`:64` 赋值。**默认 0 与真实季节可能重合**——若游戏在季节 0 开局，第一次比对会认为「没变」而跳过推送。 |
| `_lastCameraZ` | `private float _lastCameraZ` | 相机高度缓存，初值 0（`:20`）。`:66` 读出、`:68` 参与滞回比较、`:73` 赋值。 |
| `_lastHourUpdate` | `private int _lastHourUpdate` | 小时缓存，初值 **0**（`:22`）。`:76` 比较、`:81` 赋值。**初值 0 与「小时 0」重合**——若反编译器还原的 `==` 是真的，则整局只在第 0 小时推一次。 |
| `_mapScene` | `private MapScene _mapScene` | 地图场景引用，**构造器里取**：`Campaign.Current.MapSceneWrapper as MapScene`（`:30`）。**用的是 `as`，失败就是 null**，之后 `:67` 的 `_mapScene.Scene` 会空引用。 |
| `Priority` | `public override int Priority => 70` | 覆盖基类 `CampaignEntityVisualComponent.cs:11` 的 `virtual int Priority => 0`。声明在 `:26`。**排序是升序**（`SandBoxViewVisualManager.cs:14` 的 `CompareTo`），**所以 70 表示比 Priority 小的组件晚 tick**。 |
| `MapAudioManager()` | 显式无参构造（`:28-31`） | 唯一构造器，**只做一件事**：把 `Campaign.Current.MapSceneWrapper as MapScene` 存进 `_mapScene`（`:30`）。**依赖 `Campaign.Current` 已存在**——在战役未初始化时构造会 NRE。 |
| `OnVisualTick` | `public override void OnVisualTick(MapScreen screen, float realDt, float dt)` | 覆盖基类 `:13`。**三段边沿检测**：季节 `:59`/`:62`/`:64`、相机 `:68`/`:71`/`:73`、小时 `:76`/`:79`/`:81`。**`screen` 与 `realDt` 收下不用。** 三个缓存字段各管一段，互不影响。 |

## 真实示例

用三个缓存字段复现「变了才推」的形状（注意阈值的差异）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

CampaignTime now = CampaignTime.Now;
Debug.Print("season=" + now.GetSeasonOfYear + " hour=" + now.CurrentHourInDay, 0);

// 相机高度用的是 0.1 的滞回阈值（MapAudioManager.cs:68），不是精确相等
Vec3 cam = Mission.Current?.Scene?.LastFinalRenderCameraPosition ?? Vec3.Zero;
Debug.Print("cameraZ=" + cam.Z + "  阈值=0.1（超过才推送）", 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** `Priority` 虽为 `public override`，但外部拿不到类型。
- **`WeatherEventIntensityParameterId = "Rainfall"` 是死常量。** `:16` 声明，类内零引用。**雨天的音频强度在 v1.4.5 不由本组件推送。**
- **四个常量都被编译器内联了。** 改它们的值等于改三处字面量；**而它们是 `private`，外部也引用不到。**
- **`_mapScene` 用 `as` 转换，无判空。** 构造器 `:30` 失败时 `_mapScene` 为 null，`OnVisualTick` 的 `:67` 会 `NullReferenceException`。**`AddEntityComponent` 在 `MapScreen.cs:2221` 被调用时 `Campaign.Current` 必然存在，所以引擎自身安全。**
- **`Daytime` 判断方向存疑。** 见「如何使用」那条。**我不断言源码是 `!=`。**
- **`Priority = 70` 是升序里的中间偏后。** `SandBoxViewVisualManager.cs:14` 用 `CompareTo` 升序排，**数字大的后 tick**。`MapScreen.cs:2219-2223` 依次注册了 `MapTracksVisualManager`、`MapWeatherVisualManager`、`MapAudioManager`、`MobilePartyVisualManager`、`SettlementVisualManager`，**本类注册顺序在第三**。
- **`OnVisualTick` 每帧调用但只在变化时写参数。** 三个字段各自独立，**季节变了不会顺带刷新小时。**
- **`CampaignTime.Now` 在方法里被反复读取。** 反编译产物里连续出现多次 `now = CampaignTime.Now`（`:61`/`:63`/`:75`/`:78`/`:80` 等），这是编译器优化残留，**不代表多次系统调用**。

## 参见

- 基类与注册：[CampaignEntityVisualComponent](../../campaign-ext/CampaignEntityVisualComponent/)（`Priority` `:11`、`OnVisualTick` `:13`）、[SandBoxViewVisualManager](../../campaign-ext/SandBoxViewVisualManager/)（`AddEntityComponent<T>` `:83`、`SortComponents` `:115`、`_comparisonDelegate` `:14`、`VisualTick` `:21`）
- 注册点：`bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapScreen.cs:2221`
- 唯一出口：[SoundManager](../../engine/SoundManager/)（`SetGlobalParameter` `bin/TaleWorlds.Engine/TaleWorlds.Engine/SoundManager.cs:80`，转发 `EngineApplicationInterface.ISoundManager`）
- 依赖：[Settlement](../../campaign/Settlement/)、`Seasons`、`CampaignTime`、`MapScene`、`MapScreen`
- 同桶：[NameplateSize](../NameplateSize/)、[ModuleCheckResult](../ModuleCheckResult/)、[ArenaPreloadView](../ArenaPreloadView/)、[SandBoxEditorMissionTester](../SandBoxEditorMissionTester/)、[DefeatHideoutBossObjective](../DefeatHideoutBossObjective/)
- 桶首页：[gameplay API 分区](../)
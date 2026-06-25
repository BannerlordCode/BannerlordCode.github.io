---
title: NativeOptions
description: NativeOptions - 引擎原生选项管理器，提供视频/图形/音频配置的读写、设备查询与画质预设
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeOptions`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeOptions

**命名空间:** TaleWorlds.Engine.Options
**模块:** TaleWorlds.Engine
**类型:** class（静态工具类?
## 概述

`NativeOptions

` 是引擎层的原生选项管理器，提供对视频、图形、音频、输入等游戏配置的统一读写接口。所有方法都是静态的——该类不需要实例化。它通过 

`EngineApplicationInterface.IConfig

` 将调用转发到原生引擎层（C++），?C# 托管层与引擎配置系统之间的桥梁?
该类负责三类工作?1) 配置读写——通过 

`GetConfig

`/

`SetConfig

` 读写 

`NativeOptionsType

` 枚举标识的配置项?2) 设备查询——枚举可用的声卡、显示器、显卡和分辨率；(3) 画质预设——通过 

`ConfigQuality

` 枚举提供五档预设和自定义模式?
## 心智模型

?

`NativeOptions

` 想成"游戏设置的中央控制台"?
**配置项分?* ?

`NativeOptionsType

` 枚举包含 70+ 个配置项，分为五大类?- **音频**：`MasterVolume

`、`SoundVolume

`、`MusicVolume

`、`SoundDevice

` ?- **输入**：`MouseSensitivity

`、`InvertMouseYAxis

`、`EnableVibration

`、`GyroAimSensitivity

` ?- **视频/显示**：`DisplayMode

`、`ScreenResolution

`、`RefreshRate

`、`VSync

`、`Brightness

` ?- **图形质量**：`ShaderQuality

`、`TextureQuality

`、`ShadowmapResolution

`、`WaterQuality

` ?- **后处理特?*：`DepthOfField

`、`SSR

`、`Bloom

`、`MotionBlur

`、`DLSS

` ?
**选项数据列表** ?

`VideoOptions

` ?

`GraphicsOptions

` 两个静态属性返?

`List&lt;NativeOptionData&gt;

`，供设置界面 ViewModel 绑定。列表在首次访问时懒初始化，根据选项类型创建 

`NativeNumericOptionData

`（数值滑块）、`NativeSelectionOptionData

`（下拉选择）或 

`NativeBooleanOptionData

`（开关）。某些后处理选项（如 

`PostFXLensFlare

`）仅在引擎检测到 GFX 支持时才加入列表?
**变更通知** ?

`SetConfig

` 设置配置后会触发 

`OnNativeOptionChanged

` 委托通知监听者。`Apply

` 方法批量应用多个配置后触?

`OnNativeOptionsApplied

` 事件。设置界?ViewModel 通过订阅这些事件刷新 UI?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`VideoOptions

` \| 

`List&lt;NativeOptionData&gt;

`（静态） \| 视频选项数据列表（显示模式、分辨率、刷新率、VSync、亮度等），懒初始化 \|
\| 

`GraphicsOptions

` \| 

`List&lt;NativeOptionData&gt;

`（静态） \| 图形选项数据列表（画质、纹理、阴影、粒子、后处理等），懒初始化，部分选项按硬件支持动态加?\|

## 主要事件

\| 事件/委托 \| 说明 \|
\|-----------\|------\|
\| 

`OnNativeOptionsApplied

` \| 

`static event Action

` ?

`Apply

` 方法批量应用配置后触?\|
\| 

`OnNativeOptionChanged

` \| 

`static OnNativeOptionChangedDelegate

` ?单个配置项被 

`SetConfig

` 修改后触发，携带变更?

`NativeOptionsType

` \|

## 主要方法

### GetConfig
`

`

`csharp
public static float GetConfig(NativeOptions.NativeOptionsType type)
`

`

`
读取指定配置项的当前值（浮点数）。转发到 

`IConfig.GetRGLConfig

`?
### SetConfig
`

`

`csharp
public static void SetConfig(NativeOptions.NativeOptionsType type, float value)
`

`

`
设置指定配置项的值。写入后触发 

`OnNativeOptionChanged

` 委托通知监听者。注意：此方法仅写入配置，需要调?

`ApplyConfigChanges

` ?

`Apply

` 才能让引擎应用变更?
### GetDefaultConfig
`

`

`csharp
public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)
`

`

`
读取指定配置项的默认值?
### GetDefaultConfigForOverallSettings
`

`

`csharp
public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)
`

`

`
读取指定画质预设下某配置项的默认值。`config

` 对应 

`ConfigQuality

` 枚举的整数值?
### ApplyConfigChanges
`

`

`csharp
public static void ApplyConfigChanges(bool resizeWindow)
`

`

`
应用所有未应用的配置变更到引擎。`resizeWindow

` ?true 时同时调整窗口大小?
### Apply
`

`

`csharp
public static void Apply(int texture_budget, int sharpen_amount, int hdr, int dof_mode, int motion_blur, int ssr, int size, int texture_filtering, int trail_amount, int dynamic_resolution_target)
`

`

`
批量应用多个图形配置参数并触?

`OnNativeOptionsApplied

` 事件?
### SaveConfig
`

`

`csharp
public static SaveResult SaveConfig()
`

`

`
将当前配置保存到配置文件。返?

`SaveResult

` 枚举指示保存结果?
### GetGFXPresetName
`

`

`csharp
public static string GetGFXPresetName(NativeOptions.ConfigQuality presetIndex)
`

`

`
返回画质预设的名称字符串?1" ?"5" 对应 VeryLow ?VeryHigh?Custom" 表示自定义）?
### IsGFXOptionChangeable
`

`

`csharp
public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)
`

`

`
判断指定画质预设下图形选项是否可更改（

`GFXCustom

` 之前的前五档预设下不可单独更改，因为它们会覆盖个别设置）?
### ReadRGLConfigFiles
`

`

`csharp
public static void ReadRGLConfigFiles()
`

`

`
重新读取 RGL 配置文件（引擎配置文件的重新加载）?
### SetDefaultGameConfig
`

`

`csharp
public static void SetDefaultGameConfig()
`

`

`
恢复所有配置为默认值?
### SetBrightness
`

`

`csharp
public static void SetBrightness(float gamma)
`

`

`
设置亮度/伽马值?
## 设备与分辨率查询方法

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`GetSoundDeviceName(int i)

` \| 获取指定索引的声卡名?\|
\| 

`GetSoundDeviceCount()

` \| 获取声卡数量 \|
\| 

`GetMonitorDeviceName(int i)

` \| 获取指定索引的显示器名称 \|
\| 

`GetMonitorDeviceCount()

` \| 获取显示器数?\|
\| 

`GetVideoDeviceName(int i)

` \| 获取指定索引的显卡名?\|
\| 

`GetVideoDeviceCount()

` \| 获取显卡数量 \|
\| 

`GetResolutionCount()

` \| 获取当前显示器支持的分辨率数?\|
\| 

`GetResolutionAtIndex(int index)

` \| 获取指定索引的分辨率（返?

`Vec2

`?\|
\| 

`GetResolution(ref int width, ref int height)

` \| 获取当前桌面分辨?\|
\| 

`GetDesktopResolution(ref int width, ref int height)

` \| 获取桌面分辨?\|
\| 

`SetCustomResolution(int width, int height)

` \| 设置自定义分辨率 \|
\| 

`GetRefreshRateCount()

` \| 获取刷新率数?\|
\| 

`GetRefreshRateAtIndex(int index)

` \| 获取指定索引的刷新率 \|
\| 

`Is120HzAvailable()

` \| 检查是否支?120Hz \|
\| 

`GetIsDLSSAvailable()

` \| 检查是否支?DLSS \|
\| 

`GetDLSSTechnique()

` \| 获取当前 DLSS 技术模?\|
\| 

`GetDLSSOptionCount()

` \| 获取 DLSS 选项数量 \|
\| 

`CheckGFXSupportStatus(int enumType)

` \| 检查指?GFX 特效是否受支?\|
\| 

`RefreshOptionsData()

` \| 刷新选项数据 \|

## 枚举：ConfigQuality

\| ?\| 名称 \| 说明 \|
\|----\|------\|------\|
\| 0 \| 

`GFXVeryLow

` \| 非常低画?\|
\| 1 \| 

`GFXLow

` \| 低画?\|
\| 2 \| 

`GFXMedium

` \| 中等画质 \|
\| 3 \| 

`GFXHigh

` \| 高画?\|
\| 4 \| 

`GFXVeryHigh

` \| 非常高画?\|
\| 5 \| 

`GFXCustom

` \| 自定义画?\|

## 枚举：NativeOptionsType（部分）

完整枚举包含 70+ 项，以下列出主要分类?
\| 分类 \| 枚举?\|
\|------\|--------\|
\| 音频 \| 

`MasterVolume

`、`SoundVolume

`、`MusicVolume

`、`VoiceChatVolume

`、`VoiceOverVolume

`、`SoundDevice

`、`MaxSimultaneousSoundEventCount

`、`SoundPreset

`、`KeepSoundInBackground

`、`SoundOcclusion

` \|
\| 输入 \| 

`MouseSensitivity

`、`InvertMouseYAxis

`、`MouseYMovementScale

`、`TrailAmount

`、`EnableVibration

`、`EnableGyroAssistedAim

`、`GyroAimSensitivity

`、`EnableTouchpadMouse

`、`EnableAlternateAiming

` \|
\| 显示 \| 

`DisplayMode

`、`SelectedMonitor

`、`SelectedAdapter

`、`ScreenResolution

`、`RefreshRate

`、`ResolutionScale

`、`FrameLimiter

`、`VSync

`、`Brightness

` \|
\| 图形 \| 

`OverAll

`、`ShaderQuality

`、`TextureBudget

`、`TextureQuality

`、`ShadowmapResolution

`、`ShadowmapType

`、`ShadowmapFiltering

`、`ParticleDetail

`、`ParticleQuality

`、`FoliageQuality

`、`CharacterDetail

`、`EnvironmentDetail

`、`TerrainQuality

`、`NumberOfRagDolls

`、`AnimationSamplingQuality

`、`Occlusion

`、`TextureFiltering

`、`WaterQuality

`、`Antialiasing

`、`DLSS

`、`LightingQuality

`、`DecalQuality

`、`PhysicsTickRate

` \|
\| 后处?\| 

`DepthOfField

`、`SSR

`、`ClothSimulation

`、`InteractiveGrass

`、`SunShafts

`、`SSSSS

`、`Tesselation

`、`Bloom

`、`FilmGrain

`、`MotionBlur

`、`SharpenAmount

`、`PostFXLensFlare

`、`PostFXStreaks

`、`PostFXChromaticAberration

`、`PostFXVignette

`、`PostFXHexagonVignette

`、`DynamicResolution

`、`DynamicResolutionTarget

`、`FSR

` \|

## 使用示例

### 示例 1：读取和修改图形设置

**场景**: 你的 Mod 需要根据玩家硬件自动调整画质预设，并在修改后应用变更?
`

`

`csharp
using TaleWorlds.Engine.Options;

// 读取当前整体画质等级
float overallQuality = NativeOptions.GetConfig(NativeOptions.NativeOptionsType.OverAll);
Console.WriteLine($"当前画质等级: {overallQuality}");

// 切换到高画质预设
NativeOptions.SetConfig(NativeOptions.NativeOptionsType.OverAll, (float)NativeOptions.ConfigQuality.GFXHigh);

// 应用变更到引?NativeOptions.ApplyConfigChanges(false);

// 保存配置到文?SaveResult result = NativeOptions.SaveConfig();
Console.WriteLine($"配置保存结果: {result}");
`

`

`

### 示例 2：订阅配置变更事?
**场景**: 你的设置界面 ViewModel 需要在任何配置项被修改时刷?UI 显示?
`

`

`csharp
using TaleWorlds.Engine.Options;

public class OptionsViewModel
{
    public OptionsViewModel()
    {
        // 订阅单个配置项变?        NativeOptions.OnNativeOptionChanged += OnOptionChanged;
        // 订阅批量应用事件
        NativeOptions.OnNativeOptionsApplied += OnOptionsApplied;
    }

    private void OnOptionChanged(NativeOptions.NativeOptionsType changedType)
    {
        // 读取新值并更新 UI 绑定
        float newValue = NativeOptions.GetConfig(changedType);
        Console.WriteLine($"配置?{changedType} 变更?{newValue}");
        // 更新对应?UI 属?..
    }

    private void OnOptionsApplied()
    {
        // 批量应用后刷新所有显?        Console.WriteLine("所有配置已应用");
    }

    public void OnFinalize()
    {
        NativeOptions.OnNativeOptionChanged -= OnOptionChanged;
        NativeOptions.OnNativeOptionsApplied -= OnOptionsApplied;
    }
}
`

`

`

**要点**: 

`NativeOptions

` 是纯静态类，所有方法都通过 

`EngineApplicationInterface.IConfig

` 转发到原生引擎。`SetConfig

` 只写入配置值，不立即应用——需要额外调?

`ApplyConfigChanges

` 才让引擎生效。`OnNativeOptionChanged

` 是委托字段（?event），直接赋值会覆盖之前的订阅者，应使?

`+=

` 添加。`GetGameKeys

` ?

`SetGameKeys

`/

`SetDefaultGameKeys

` 方法在源码中标记为未实现（`Debug.FailedAssert

`），调用会输出错误日志但不崩溃。`GraphicsOptions

` 列表中的某些后处理选项（如 

`PostFXLensFlare

`）仅?

`CheckGFXSupportStatus

` 返回 true 时才被加入，因此列表长度因硬件而异。`ConfigQuality

` 枚举?

`GFXCustom

` 之前的五档预设会覆盖个别设置，`IsGFXOptionChangeable

` 返回 false 表示在预设模式下个别选项不可单独调整?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)

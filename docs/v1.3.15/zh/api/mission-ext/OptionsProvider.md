<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsProvider`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsProvider

**命名空间:** TaleWorlds.MountAndBlade.Options
**模块:** TaleWorlds.MountAndBlade
**类型:** static class

## 概述

`OptionsProvider

` 是游戏设置界面的**选项目录工厂**。它是一个静态类，提供一?

`Get*OptionCategory

` 方法，每个方法返回一?

`OptionCategory

`，包含该设置类别下的所有选项数据（`IOptionData

`）和选项分组（`OptionGroup

`）?
游戏设置界面（视?性能/音频/游戏?控制器）的所有选项都由本类定义。模组开发者可通过本类了解原版支持哪些选项，或通过 Harmony 补丁在返回的选项列表中插入自定义选项?
## 心智模型

?

`OptionsProvider

` 理解?设置界面的菜单生成器"。每?

`Get*OptionCategory

` 方法返回一?

`OptionCategory

`，其结构为：

`

`

`
OptionCategory
├── GeneralOptions (IEnumerable&lt;IOptionData&gt;)  // 通用选项
└── OptionGroups (IEnumerable&lt;OptionGroup&gt;)    // 分组选项
    └── OptionGroup
        └── Options (IEnumerable&lt;IOptionData&gt;) // 该组的选项
`

`

`

选项数据类型?- 

`NativeSelectionOptionData

`：下拉选择（如画质等级?- 

`NativeBooleanOptionData

`：开关（如景深开/关）
- 

`NativeNumericOptionData

`：数值滑块（如鼠标灵敏度?- 

`ManagedSelectionOptionData

` / 

`ManagedBooleanOptionData

` / 

`ManagedNumericOptionData

`：托管选项（由 C# 代码管理而非引擎原生?- 

`ActionOptionData

`：按钮（?基准测试"?
`isMultiplayer

` 参数控制多人模式下的选项差异（如多人不显示战场规模、尸体数量等单机选项）?
## 主要方法

### GetVideoOptionCategory
`

`

`csharp
public static OptionCategory GetVideoOptionCategory(bool isMainMenu,
    Action onBrightnessClick, Action onExposureClick, Action onBenchmarkClick)
`

`

`
返回视频设置类别。通用选项：基准测试（仅主菜单）、亮度调整、曝光补偿、显示器选择、显卡适配器、显示模式、分辨率、刷新率、垂直同步、菜单强制垂直同步、帧率限制、锐化程度?
### GetPerformanceOptionCategory
`

`

`csharp
public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)
`

`

`
返回性能设置类别。包含四个分组：
- **Graphics**：抗锯齿、着色器质量、纹理预?质量/过滤、角色细节、阴影分辨率/类型/过滤、粒子细?质量、植被质量、地形质量、环境细节、遮挡、贴花质量、水面质量、尸体数量（仅单机）、布娃娃数量、光照质量、布料模拟、太阳光束、曲面细分、交互草丛、SSR、SSSSS、动态模糊、景深、泛光、胶片颗粒、后处理特效（晕?色差/镜头光晕/六边形晕?条纹?- **Resolution Scaling**：DLSS、分辨率缩放、动态分辨率、动态分辨率目标
- **Gameplay**：战场规模（仅单机）、物理帧率（仅单机）、动画采样质?- **Audio**：最大同时声音事件数

### GetAudioOptionCategory
`

`

`csharp
public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)
`

`

`
返回音频设置类别。通用选项：主音量、音效音量、音乐音量、语音音量、声音预设、声音设备、后台保持声音。多人模式额外启用语音聊天，单机模式启用声音遮挡?
### GetGameplayOptionCategory
`

`

`csharp
public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)
`

`

`
返回游戏性设置类别。通用选项：语言选择、语音语言/受伤难度（仅单机）。包含五个分组：
- **Controls**：格挡方向、攻击方向、鼠标Y轴缩?灵敏度、反转Y轴、震动、备用瞄准、DualSense 特有选项（陀螺仪辅助瞄准等）、锁定目标、减速下令、失焦暂停（仅单机）
- **Visuals**：轨迹量、友军旗帜透明度、友军旗帜显示类型、阵型距离（仅单机）、显示血?- **Camera**：第一人称马背转向、第一人称视野、战斗相机距离、垂直瞄准修正、缩放灵敏度
- **User Interface**：准星类型、命令类型、命令布局、伤亡报告类型、UI缩放、攻击方向显示、瞄准准星、伤害报告、提示音、经验报告（仅单机）、个人伤害报告、受伤视觉、聊天框/死亡图标/网络图标/通用头像/通用名称（多人）或单机聊?隐藏战斗UI/教程提示（单机）
- **Campaign**（仅单机）：自动追踪被攻击的定居点、自动存档间隔、部队生成优先级、增援波?
### GetControllerOptionCategory
`

`

`csharp
public static OptionCategory GetControllerOptionCategory()
`

`

`
返回控制器设置类别。原版返回空选项和空分组?
### GetGameKeyCategoriesList
`

`

`csharp
public static IEnumerable&lt;string&gt; GetGameKeyCategoriesList(bool isMultiplayer)
`

`

`
返回按键绑定类别列表。通用：动作类别、命令菜单类别。单机额外：战役地图类别、菜单快捷类别、照片模式类别。多人额外：投票类别。通用末尾：聊天类别?
### GetHiddenGameKeys
`

`

`csharp
public static IEnumerable&lt;int&gt; GetHiddenGameKeys(bool isNavalModuleActive)
`

`

`
返回应隐藏的按键 ID 列表。若海军模块未激活，隐藏按键 45?naval 相关）?
### GetDefaultNativeOptions
`

`

`csharp
public static Dictionary&lt;NativeOptions.NativeOptionsType, float[]&gt; GetDefaultNativeOptions()
`

`

`
返回原生选项的默认值表。键为选项类型，值为各画质等级（Overall 0-N）下的默认值数组。延迟初始化，结果缓存?
### GetDefaultManagedOptions
`

`

`csharp
public static Dictionary&lt;ManagedOptions.ManagedOptionsType, float[]&gt; GetDefaultManagedOptions()
`

`

`
返回托管选项的默认值表。包?

`BattleSize

` ?

`NumberOfCorpses

` 的各等级默认值。延迟初始化，结果缓存?
## 使用示例

### 示例: 在设置界面插入自定义选项

**场景**: 模组想在"游戏?&gt; 用户界面"分组中添加一个自定义开关选项?
`

`

`csharp
// 通过 Harmony 补丁?GetGameplayUIOptions 返回的列表后追加自定义选项
[HarmonyPatch(typeof(OptionsProvider), "GetGameplayUIOptions")]
public static class OptionsProvider_GetGameplayUIOptions_Patch
{
    static void Postfix(ref IEnumerable&lt;IOptionData&gt; __result, bool isMultiplayer)
    {
        var list = __result.ToList();
        list.Add(new ManagedBooleanOptionData(
            (ManagedOptions.ManagedOptionsType)999, // 自定义选项类型
            "My Mod Option"));
        __result = list;
    }
}
`

`

`

### 示例: 读取当前画质等级的默认?
**场景**: 模组想根据用户的整体画质设置调整行为?
`

`

`csharp
// 获取原生选项在各画质等级的默认?var defaults = OptionsProvider.GetDefaultNativeOptions();
if (defaults.TryGetValue(NativeOptions.NativeOptionsType.ShaderQuality, out float[] values))
{
    // values[0] = 最低画质时的默认?    // values[1] = 低画?    // values[2] = 中画?    // values[3] = 高画?    // values[4] = 最高画?}
`

`

`

**要点**: 

`OptionsProvider

` 是静态工厂类，所有方法返?

`IEnumerable&lt;IOptionData&gt;

`（使?

`yield return

`）。要修改选项列表，需通过 Harmony Postfix 补丁?

`IEnumerable

` 转为 

`List

` 后追加自定义选项。`isMultiplayer

` 参数控制多人/单机的选项差异?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)

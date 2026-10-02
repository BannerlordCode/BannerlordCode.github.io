---
title: "CampaignOptionsManager"
description: "基于反射的注册表：在活跃模块的程序集里发现每一个 ICampaignOptionProvider，并把它们产出的战役选项摊平成一份共享缓存。mod 贡献战役选项只需提供一个 provider 类——没有注册调用、没有顺序约定，并且有一份必须由你自己清理的共享缓存。"
---
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public static class CampaignOptionsManager`  
**Base:** 无  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionsManager.cs`

## 概述

`CampaignOptionsManager` 决定了战役选项（游戏玩法滑条、开关、下拉框、动作按钮，显示在设置界面上）如何在完全没有人调用“添加”方法的前提下进入游戏。`Initialize()` 遍历 `ModuleHelper.GetActiveGameAssemblies()`，对每一个可赋值给 `ICampaignOptionProvider` 的类型——排除接口类型本身——执行 `Activator.CreateInstance(type)`，并把结果追加进私有的静态 `_optionProviders` 列表。因此发现机制完全是对“活跃模块所拥有的程序集”做反射；把你的 provider 类以 public、无参的形式放进 mod 里，就是完整的注册步骤。

两个查询方法 `GetGameplayCampaignOptions()` 与 `GetCharacterCreationCampaignOptions()` 除了调用的是接口的哪个方法之外完全一致。两者都**先清空 `_currentOptions`**，然后**从后往前**遍历 `_optionProviders`（`for (int num = _optionProviders.Count - 1; num >= 0; num--)`），把每一个非 null 结果依次追加。逆序遍历意味着：在返回**相同** option identifier 的多个 provider 中，**最后**注册的 provider 的条目会排在返回列表的**最前面**——结合逆序这一点，最终按 id 查找时命中的会是**最先**注册的那个 provider 的条目。无论怎么推导，实际规则都是：**你自己的 provider 必须返回唯一的 identifier**。

返回的列表就是管理器自身的 `_currentOptions` 字段，不是副本。改动它的调用方会污染所有人的共享缓存；设计上的清理入口是 `ClearCachedOptions()`。

## 心智模型

把它想成**“一个由反射填充一次、通过一份共享可变列表查询的全局选项注册表”**：

- **谁来调 `Initialize`**：游戏自身的启动流程，每进程一次，在任何设置界面构建之前。第二次调用会向 `_optionProviders` **追加**，并不会清空——于是每个 provider 都被实例化两次，每个选项都出现两次。
- **典型调用顺序**：启动时 `Initialize()` → 某个界面控制器调用 `GetGameplayCampaignOptions()` 构建它的 `MBBindingList<CampaignOptionItemVM>` → `CampaignOptionsControllerVM` 接管该列表 → 在 `OnFinalize` 中调用 `ClearCachedOptions()`。这份缓存是让玩法设置界面与角色创建界面**依次**（而非并发）共享的。
- **常见误用陷阱 —— 返回的就是缓存本身**。`GetGameplayCampaignOptions()` 返回 `_currentOptions` 自身。对它 `Add` / `Remove` / `Sort`，下一个调用方看到的就是你的改动。请从它构建自己的 `MBBindingList`，别去动那份共享列表。
- **常见误用陷阱 —— provider 是逆序消费的**。如果你的两个 provider 产出同一个 `GetIdentifier()`，其中一个会按注册顺序胜出，另一个从 UI 里静默消失。identifier 是你唯一的唯一性约束；这里没有任何重复检测。
- **常见误用陷阱 —— provider 构造函数抛异常**。`Activator.CreateInstance` 在 `Initialize` 期间执行你的构造函数，且没有 try/catch。一个构造函数里读 `Campaign.Current`（启动阶段它还不存在）的 provider，会把一个看起来无害的类变成启动失败。
- **常见误用陷阱 —— 忘记清理**。不调用 `ClearCachedOptions()`，`_currentOptions` 就保留着上一个界面的选项。由于下一次 `Get*` 本来也会清空它，可见症状通常发生在销毁期间（`KeyNotFoundException` 或残留条目），而不是数据错误——但一个在销毁后仍持有该列表的界面，完全可以继续改动这个共享实例。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你想向基础游戏的设置界面贡献一个战役选项（滑条、开关、下拉框、动作按钮）。实现 `ICampaignOptionProvider`、返回你的 `ICampaignOptionData`，然后什么都不用做。
- 你想在运行时枚举全部战役选项以便读取或校验它们。
- 你需要判断某个 option identifier 是否存在（`GetOptionWithIdExists`）。

**不该用它的情况：**
- 你想加一个*游戏菜单*选项。那走的是 `CampaignGameStarter.AddGameMenuOption`，是完全不同的注册表。
- 你想获得按存档持久化的选项。战役选项是进程级/全局配置，不是战役存档状态——本类不会把它们写进战役存档。
- 你在角色创建界面上需要与玩法界面不同的数据。请同时实现那两个接口方法、让界面自行选择，不要自己维护一份平行列表。

## 依赖关系

- [ICampaignOptionProvider](../ICampaignOptionProvider) —— 你要实现的接口；`GetGameplayCampaignOptions` / `GetCharacterCreationCampaignOptions` 是两个钩子。
- [ICampaignOptionData](../ICampaignOptionData) —— 单个选项的契约，携带 identifier、名称、描述、值、启用状态与禁用原因。
- [CampaignOptionItemVM](../CampaignOptionItemVM) —— 设置界面为每个 `ICampaignOptionData` 构建的视图模型包装体；改值回调也归它所有。
- [CampaignOptionsControllerVM](../CampaignOptionsControllerVM) —— 消费该列表、对其排序，并在 finalize 时负责调用 `ClearCachedOptions` 的界面控制器。
- [ModuleHelper](../../campaign-ext/ModuleHelper) —— 提供 `GetActiveGameAssemblies()`，即反射所遍历的程序集集合。

## 主要成员

### `public static void Initialize()`

遍历 `ModuleHelper.GetActiveGameAssemblies()`，对每个程序集调用 `GetTypesSafe()`，把每一个具体的 `ICampaignOptionProvider` 实例化进 `_optionProviders`。
- **返回值**：无。
- **要求**：`type` 非 null 且 `type != typeof(ICampaignOptionProvider)`；`GetTypesSafe()` 返回的 null 项会被跳过。
- **不幂等**：第二次调用会让每个 provider 与每个选项都翻倍。这里没有 `_initialized` 保护标志。

### `public static bool GetOptionWithIdExists(string identifier)`

返回**当前缓存**中是否有条目的 `GetIdentifier()` 匹配。对 null 或空 identifier 直接返回 `false`，不触碰列表。
- **前置条件**：`_currentOptions` 必须已被某个 `Get*CampaignOptions()` 填充过。在那之前调用，它检查的是空列表，对一切都返回 `false`。

### `public static List<ICampaignOptionData> GetGameplayCampaignOptions()`

清空缓存、逆序遍历 provider、追加每个非 null 的 `IEnumerable<ICampaignOptionData>`，返回 `_currentOptions`。
- **返回语义**：管理器自己的列表——共享、可变、且会被下一次调用重新清空。要长期持有请先复制。

### `public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

形态相同，调用 `ICampaignOptionProvider.GetCharacterCreationCampaignOptions()`。同样返回 `_currentOptions`。

### `public static void ClearCachedOptions()`

执行 `_currentOptions.Clear()`。由 `CampaignOptionsControllerVM.OnFinalize` 调用，让下一个界面从干净的缓存开始。
- **注意**：它只清 `_currentOptions`；`_optionProviders` 不受影响，会在整个进程生命周期内保持已填充。

## 使用示例

### 示例 1 —— 一个 mod 贡献两个战役选项

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ViewModelCollection;

namespace MyMod.Options
{
    public class MyModOptionProvider : ICampaignOptionProvider
    {
        // 选项是基于委托的：数据对象本身并不持有存储。
        private static readonly BooleanCampaignOptionData FastTravel =
            new BooleanCampaignOptionData(
                identifier: "MyModFastTravel",
                priorityIndex: 100,
                enableState: CampaignOptionEnableState.Enabled,
                getValue: () => SettingsStore.FastTravel ? 1f : 0f,
                setValue: v => SettingsStore.FastTravel = v != 0f);

        private static readonly NumericCampaignOptionData ProgressionRate =
            new NumericCampaignOptionData(
                identifier: "MyModProgressionRate",
                priorityIndex: 101,
                enableState: CampaignOptionEnableState.Enabled,
                getValue: () => SettingsStore.ProgressionRate,
                setValue: v => SettingsStore.ProgressionRate = v,
                minValue: 0.5f,
                maxValue: 2f,
                isDiscrete: false);

        public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()
        {
            yield return FastTravel;
            yield return ProgressionRate;
        }

        public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()
        {
            // 角色创建期间不需要任何选项。
        }
    }
}
```

不需要再做别的事——活跃模块程序集里的一个 public 无参类就会被 `Initialize()` 发现。

### 示例 2 —— 安全地读取这些选项

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ViewModelCollection;

public static class MyModOptionReader
{
    public static float ReadProgressionRate()
    {
        // GetGameplayCampaignOptions 返回的是共享缓存：只遍历，不要改动。
        List<ICampaignOptionData> options = CampaignOptionsManager.GetGameplayCampaignOptions();
        foreach (ICampaignOptionData option in options)
        {
            if (option.GetIdentifier() == "MyModProgressionRate")
            {
                return option.GetValue();
            }
        }

        return 1f;   // provider 不存在：退回默认值而不是抛异常
    }

    public static bool FastTravelEnabled()
    {
        if (!CampaignOptionsManager.GetOptionWithIdExists("MyModFastTravel"))
        {
            return false;
        }

        var buffer = new List<ICampaignOptionData>(CampaignOptionsManager.GetGameplayCampaignOptions());
        foreach (ICampaignOptionData option in buffer)
        {
            if (option.GetIdentifier() == "MyModFastTravel")
            {
                return option.GetValue() != 0f;
            }
        }

        return false;
    }
}
```

## 风险与崩溃边界

- **存档序列化**：没有，而且这是刻意设计。战役选项是进程级的全局配置，不是战役存档状态；这里没有任何东西写入 `IDataStore`。对 mod 的含义是：玩家设置过的选项不会被记录进存档，因此存档无法表达“这个战役是在关闭快速旅行的情况下创建的”，读档时也没有任何校验去确认某个选项是否仍然存在。
- **跨域依赖**：该类位于 ViewModelCollection 程序集，并调用 `TaleWorlds.ModuleManager`。这条依赖边是反射式的而非编译期引用——这正是它可扩展的原因，也正是它对编译器不可见的原因。接口名拼错或缺少程序集引用，得到的是运行时的“provider 未找到”，而不是构建错误。
- **加载时序**：`Initialize()` 依赖 `ModuleHelper.GetActiveGameAssemblies()`，而后者只有在模块初始化之后才有意义。而 `Initialize()` 自己会实例化 provider，因此任何在 provider 构造函数里触碰 `Campaign.Current`、`Game.Current` 或视图的代码都会启动过早并在启动阶段抛异常。请让 provider 的构造函数保持平凡——返回静态数据即可。
- **ID 稳定性**：option identifier 是没有命名空间、也没有重复检查的普通字符串。改名 `GetIdentifier()` 会让该选项在玩家那里的设置失去对应关系（这里并没有已保存的偏好文件，但界面会跨版本跟丢它）；而复用已被别的 mod 声明过的 identifier，则意味着按 provider 注册顺序其中一个静默消失。
- **共享可变缓存**。两个同时存活的界面（例如覆盖在角色创建之上的选项浮层）会互相踩掉 `_currentOptions`。该设计假定严格顺序使用。
- **`Initialize()` 既无保护也无异常处理**。构造函数抛异常的 provider 会让启动失败；而重复调用会让每个选项在列表里静默翻倍。

## 跨版本提示

- **v1.3.x → v1.4.5**：静态接口未变——`Initialize`、`ClearCachedOptions`、`GetGameplayCampaignOptions`、`GetCharacterCreationCampaignOptions`、`GetOptionWithIdExists`。发现机制一直是对 `ModuleHelper.GetActiveGameAssemblies()` 做反射。
- **v1.4.5**：provider 仍以**逆序**注册顺序被消费，返回的列表仍是管理器自己的 `_currentOptions` 字段而非副本。不要写依赖正序的 mod。
- **v1.4.5**：不存在 `UnregisterProvider`、`AddProvider` 或 `IsInitialized` 成员。provider 在进程生命周期内是固定的。

## 参见

- ↑ 父级目录：[ViewModel API 索引](../)
- ↔ 同级：[ICampaignOptionProvider](../ICampaignOptionProvider) —— 你要实现的接口
- ↔ 同级：[ICampaignOptionData](../ICampaignOptionData) —— 单个选项的契约
- ↔ 同级：[CampaignOptionItemVM](../CampaignOptionItemVM) —— 界面为每个数据对象构建的视图模型包装
- ↔ 同级：[CampaignOptionsControllerVM](../CampaignOptionsControllerVM) —— 消费并清理缓存的界面控制器
- ↔ 跨桶：[ModuleHelper](../../campaign-ext/ModuleHelper) —— 提供反射所遍历的程序集

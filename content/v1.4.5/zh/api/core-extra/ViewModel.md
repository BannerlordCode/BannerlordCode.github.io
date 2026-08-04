---
title: "ViewModel：Gauntlet 数据源与 UI 生命周期"
description: "v1.4.5 UI 绑定基类：解释属性通知、命令、刷新和 OnFinalize，以及它与战役状态和 GauntletLayer 的边界。"
---
# ViewModel

## 元数据

- **Namespace:** `TaleWorlds.Library`
- **Module:** `TaleWorlds.Library`
- **Type:** `public abstract class ViewModel`
- **Base:** `IViewModel`、`INotifyPropertyChanged`
- **源码:** `bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs`

## 一句话职责

`ViewModel` 是 Gauntlet 的反射绑定数据源：它把 UI 可见属性、通知、集合和命令连接到一个短生命周期的屏幕对象，并负责在绑定层报告显示变化，但它不是战役实体、Mission 对象或存档状态本身，关闭页面后必须停止使用并释放它持有的订阅和临时资源。

## 心智模型

ViewModel 位于 Library/UI 之间。具体的 `BannerViewModel`、`MissionOrderVM` 等子类持有要展示的状态，并通过 public 属性、`OnPropertyChanged` 和 `SetField` 通知 Gauntlet。构造函数会扫描具体类型的属性和方法并缓存绑定元数据；`GetPropertyValue`、`SetPropertyValue`、`GetViewModelAtPath` 和 `ExecuteCommand` 是 UI 绑定桥的一部分。

一个屏幕通常创建 VM，把它传给 [`GauntletLayer`](../../engine/GauntletLayer).`LoadMovie`，在游戏/UI线程上由属性变化驱动显示，再按相反顺序释放 movie、调用 `OnFinalize` 并清掉数据源。VM 可以读取 Campaign/Mission 状态，但它不是状态的权威持有者；跨屏幕持有 Hero、Agent 或 native 资源会让生命周期失配。

## 何时用，何时不用

### 适合使用

- 为一个 Gauntlet movie 建立 UI 属性、集合、提示和命令入口。
- 在 setter 中用 `SetField` 避免无变化通知，并在派生 VM 的 `RefreshValues` 中重新读取本地化文本或派生显示值。
- 在 UI 销毁时重写 `OnFinalize`，取消订阅、释放临时资源并断开长生命周期对象。

### 不适合使用

- 不要把 VM 当作 `Hero`、`MobileParty` 或 `Mission` 的唯一状态源；改变战役世界要回到对应实体、Action 或 Behavior。
- 不要从后台线程直接写绑定属性，也不要在 VM 已 finalize 后继续触发通知。
- 不要跨 UI 页面共享一个持有已销毁 `Agent`、`BannerVisual` 或 Mission 引用的 VM。

## 依赖关系

```text
Campaign/Mission source → concrete ViewModel → GauntletLayer → UIContext/movie
                                  ↓                 ↓
                         PropertyChanged       ScreenLayer input/finalize
```

- 上游：Campaign/Mission 或 Core 值对象，例如 `BannerViewModel` 持有 [`Banner`](../Banner)。
- 绑定层：[`GauntletLayer`](../../engine/GauntletLayer) 的 `LoadMovie` 接收 `ViewModel`，反射读取属性和方法。
- 宿主层：`ScreenLayer`/`ScreenBase` 管输入顺序、激活、焦点和销毁；Mission 页面还受 [`Mission`](../../mission/Mission) 生命周期约束。
- 相关子类：`BannerViewModel`、`HintViewModel`、`ItemVM` 等是具体数据源；不要把生成的 Gauntlet Widget 当成 VM 子类。

## 关键成员与时机

| 成员 | 用途 | 时机与副作用 |
|---|---|---|
| `PropertyChanged` 及类型化通知事件 | 告诉绑定层属性或值发生变化。 | setter 只在状态真正变化时通知；重复通知会增加 UI 工作，finalize 后继续通知可能访问已销毁控件。 |
| `SetField<T>(ref T, T, string)` | 比较新旧值、写入字段并调用 `OnPropertyChanged`。 | 派生属性 setter 的首选模式；它只返回是否发生变化，不会替你刷新相关派生属性。 |
| `OnPropertyChanged`、`OnPropertyChangedWithValue` | 主动广播普通或类型化的新值。 | 当一个 setter 影响多个绑定属性时使用；属性名必须对应真实绑定属性。 |
| `GetPropertyValue`、`GetPropertyType`、`SetPropertyValue` | 供绑定器按名称读写 public 属性。 | 名称不存在时返回 null 或不执行写入；属性 setter 仍需自己验证输入。反射调用不等于绕过生命周期。 |
| `GetViewModelAtPath` | 沿嵌套 VM 或 `IMBBindingList` 解析绑定路径。 | 列表为空、索引越界或子对象不是 VM 时返回 null；不要把它当作无条件的对象导航。 |
| `ExecuteCommand(string, object[])` | 通过命令名寻找实例方法并转换部分字符串参数后调用。 | 找不到方法、参数数量或类型不匹配时不会执行；命令仍在当前 UI 生命周期和线程内运行。 |
| `RefreshValues()` | 派生类重新加载本地化文本或派生显示数据。 | 基类实现为空；必须由具体 VM 重写并在重新进入页面/语言变化等合法时机调用。 |
| `OnFinalize()` | 派生类释放订阅和短生命周期资源。 | 基类不自动释放派生持有物；宿主应只调用一次并随后停止使用 VM。 |

## 真实绑定路径

### 用真实旗帜值建立 VM

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core.ViewModelCollection.BannerEditor;

BannerViewModel bannerViewModel = new BannerViewModel(Hero.MainHero.ClanBanner);
string bannerCode = bannerViewModel.BannerCode;
bannerViewModel.RefreshValues();
bannerViewModel.OnFinalize();
```

`BannerViewModel` 的构造函数接收真实 `Banner`，其 `BannerCode` setter 会调用 `Banner.Deserialize` 后发出属性通知。实际 movie 宿主应在关闭时先释放 movie，再 finalize VM；示例展示生命周期顺序，不能在 finalize 后继续把这个对象交给 UI。

### 派生类的属性模式

```csharp
using TaleWorlds.Library;

public sealed class CounterViewModel : ViewModel
{
    private int _count;

    public int Count
    {
        get => _count;
        set => SetField(ref _count, value);
    }

    public void ResetCount()
    {
        Count = 0;
    }
}
```

Gauntlet 可以绑定 `Count`，也可以把 `ResetCount` 作为命令方法。这个 VM 只保存显示状态；当 `Count` 代表 Campaign 数值时，应由明确的模型/Action 更新权威值，再让 VM 重读，而不是把 UI 字段当作世界状态。

## 风险与边界

- **元数据缓存：** 构造具体类型时会缓存属性和方法反射结果。运行时动态改变属性布局不会自动刷新；确有程序集变化时才使用 `RefreshPropertyAndMethodInfos`，不要每帧调用。
- **通知一致性：** 直接改 backing field 不会通知 UI；只更新一个派生属性也可能留下旧显示。用 `SetField` 并显式通知相关属性。
- **命令安全：** `ExecuteCommand` 是反射入口。命令名和参数来自 UI，应在 setter/命令内部验证状态，不能假设所有绑定调用都来自可信业务流程。
- **Finalize：** `OnFinalize` 不会自动取消 Campaign 事件、Mission 事件或自定义订阅。派生类必须对称清理，宿主也不能在 movie 释放后继续使用 VM。
- **线程和阶段：** `PropertyChanged` 通知会直接调用订阅者；从后台线程写入可能与 UI 绘制竞态。把绑定更新放在 UI 生命周期允许的线程和阶段。
- **状态权威：** VM 的值刷新只改变 UI 表示。改金币、领地、编制或存档数据必须使用对应的 Campaign API，不能靠 `SetPropertyValue` 绕过 Action/Save 契约。

## 版本说明

本页以 v1.4.5 的 `TaleWorlds.Library.ViewModel` 和 Gauntlet 调用点为准。不同版本可能增加类型化通知事件或绑定辅助方法；mod 应以目标版本实际基类成员为准，不要把某个 VM 子类的属性当作基类保证。

## 导航

- [↑ Core Extra 父级](../)
- [↔ Banner](../Banner)
- [↔ ItemObject](../ItemObject)
- [↔ SkillObject](../SkillObject)
- [相关：GauntletLayer](../../engine/GauntletLayer)
- [相关：ScreenManager](../../gui/ScreenManager)

---
title: "ActionCampaignOptionData"
description: "战役设置里的「动作型选项」数据行。它没有 ViewModel、没有生命周期、没有绑定，只是一枚被 ICampaignOptionProvider 产出的不可撤销设置项：带一个标识符、一个排序权重、一个启用态和一个点击时执行的 Action 委托。"
---
# ActionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ActionCampaignOptionData : CampaignOptionData`  
**Base:** `CampaignOptionData`  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/ActionCampaignOptionData.cs`

## 概述

这是一枚**纯数据行**，不是视图模型。整个文件只有 24 行、一个私有字段、两个公有成员。它描述的是战役设置界面里的一行「点了就做事」的选项——没有开关状态，没有数值，只有「执行」。

它继承 `CampaignOptionData`，但**刻意把基类的数值能力全部传成 `null`**：

```csharp
public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState,
    Action action, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null)
    : base(identifier, priorityIndex, enableState, null, null, getIsDisabledWithReason)
```

基类构造的第三个参数之后是 `Func<float> getValue`、`Action<float> setValue`，这里两个都是 `null`。这正是「动作型」与「数值型」选项的分界：数值型选项靠这对委托读写一个 `float`（并可进一步映射到难度预设），动作型没有值，只有一次副作用。`getIsDisabledWithReason` 被原样透传给基类，所以这一行仍然可以带一个「为什么灰掉」的判定。

它只覆盖了基类的 `GetDataType()`，返回 `CampaignOptionDataType.Action`——这就是消费方区分「这一行是可点按钮」与「这一行有滑块/下拉」的判据。真正的动作封装在 `ExecuteAction()` 里，就是一句 `_action?.Invoke()`。

原版只有两处在用它，都在 `DefaultCampaignOptionsProvider.GetGameplayCampaignOptions()` 里：

```csharp
yield return new ActionCampaignOptionData("ResetTutorial", 10000, CampaignOptionEnableState.Enabled, ExecuteResetTutorial);
if (TaleWorlds.InputSystem.Input.IsGamepadActive)
{
    yield return new ActionCampaignOptionData("EnableCheats", 11000, CampaignOptionEnableState.Enabled, ExecuteEnableCheats);
}
```

注意第二个还套了手柄检测——**这一行本身就是"该不该出现"的开关**。

## 心智模型

把它读成**「设置界面里的一次性按钮，一次 `new` 就是一行的全部身份」**：

- **谁 new 它**：不是 UI 层，是**选项提供者**。任何实现 `ICampaignOptionProvider` 的类在 `GetGameplayCampaignOptions()` / `GetCharacterCreationCampaignOptions()` 里 `yield return` 它。`CampaignOptionsManager.Initialize()` 反射扫描活动游戏程序集、把所有 `ICampaignOptionProvider` 实现类 `Activator.CreateInstance` 出来并缓存它们的产出；`CampaignOptionsManager.GetGameplayCampaignOptions()` 返回汇总后的 `List<ICampaignOptionData>`。
- **谁持引用**：`CampaignOptionsManager` 的缓存列表，间接由 `CampaignOptionsControllerVM` 拿去渲染。**注意它是被缓存的**：`ClearCachedOptions()` 的存在说明产出物在管理器里活过单次面板打开。
- **绑定到哪个 View 属性**：不适用。它没有 `[DataSourceProperty]`，不继承 `ViewModel`，也没有 `OnPropertyChangedWithValue`。面板拿到的是一个 `ICampaignOptionData`，由上层 VM 决定怎么显示。**别在这个类上找绑定点，它一个都没有。**
- **什么时候 Dispose**：**不适用**。这是本类型与本桶其余所有类型最大的区别——没有 `OnFinalize`、没有 `RefreshValues`、没有事件订阅、没有 `MBBindingList`、没有 native 句柄。它是一个不可变的值对象，GC 回收即结束。给它套生命周期讨论是错的。
- **`priorityIndex` 决定行序**，不是数组下标。`10000` 和 `11000` 把这两行推到难度预设（100）、自动分配家族特性（1000）、铁人模式（1100）之后。
- **`identifier` 既是查找键也是文本键**。基类的 `GetNameOfOption` / `GetDescriptionOfOption` 静态方法拿 `identifier` 去模块的 `GlobalTextManager` 里找 `str_..._<identifier>` 之类的文本键。改名等于同时改掉存档/查找/文案三条链路。
- **常见误用一**：把它当"回调注册表"，在别处也 `new` 一枚然后自己 `ExecuteAction()`。可以，但这样你绕过了 `enableState` 与 `getIsDisabledWithReason` 的判定——设置界面可能正把这行显示为灰色。
- **常见误用二**：以为 `getValue`/`setValue` 是 `null` 就意味着基类会崩。实际上基类的 `GetValue()` / `SetValue()` 就是直接调这两个委托，谁去调谁 NRE。**这一行永远不该被当数值型选项读**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Action action, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null)` | 建立一行"点一下就执行"的设置项。把 `getValue`/`setValue` 显式传成 `null` 以声明自己是动作型，并把 `getIsDisabledWithReason` 透传给基类用于灰置原因。 |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | 唯一的类型覆写，恒返回 `CampaignOptionDataType.Action`。消费方靠它决定渲染成按钮而不是滑块或下拉。 |
| `ExecuteAction` | `public void ExecuteAction()` | 执行构造时传入的 `Action`，写法是 `_action?.Invoke()`。**注意这是 `public` 的**：任何持有该行的代码都能触发它，不存在"只有 UI 点得到"这回事。 |
| `_action` | `private Action _action` | 唯一的字段。构造时赋值，此后不再改变，也没有任何读取或写入的公开途径。 |

注意 `getIsDisabledWithReason` 的返回类型 `CampaignOptionDisableStatus` 是**结构体而不是枚举**（文件 `CampaignOptionDisableStatus.cs`），只有三个只读属性 `IsDisabled`、`DisabledReason`、`ValueIfDisabled`，全部在构造函数 `(bool isDisabled, string disabledReason, float valueIfDisabled = -1f)` 里一次性填好。它没有 `Locked` / `Active` 之类的具名常量——想表达"为什么灰掉"必须自己拼字符串。

## 真实示例

注册一条自己的动作型设置项——这就是模组该走的全部流程：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.ViewModelCollection;

public class MyCampaignOptionProvider : ICampaignOptionProvider
{
    public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()
    {
        yield return new ActionCampaignOptionData(
            "MyOpenJunkDrawer",
            12000,
            CampaignOptionEnableState.Enabled,
            ExecuteOpenJunkDrawer);
    }

    public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()
    {
        yield break;
    }

    private static void ExecuteOpenJunkDrawer()
    {
        InformationManager.ShowTooltip(typeof(MobileParty), MobileParty.MainParty, true, true);
    }
}
```

从汇总列表里把它挑出来并执行（`GetDataType` 才是判断"这一行是按钮"的正确方式）：

```csharp
public bool RunMyOption(string identifier)
{
    foreach (ICampaignOptionData option in CampaignOptionsManager.GetGameplayCampaignOptions())
    {
        if (option.GetDataType() != CampaignOptionDataType.Action)
        {
            continue;
        }

        ActionCampaignOptionData action = option as ActionCampaignOptionData;
        if (action != null && action.GetIdentifier() == identifier)
        {
            action.ExecuteAction();
            return true;
        }
    }

    return false;
}
```

带"为什么灰掉"的一行——这是 `getIsDisabledWithReason` 唯一该出现的地方：

```csharp
public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()
{
    yield return new ActionCampaignOptionData(
        "MyOpenJunkDrawer",
        12000,
        CampaignOptionEnableState.Enabled,
        ExecuteOpenJunkDrawer,
        GetJunkDrawerDisabledReason);
}

private static CampaignOptionDisableStatus GetJunkDrawerDisabledReason()
{
    // CampaignOptionDisableStatus 是 struct，三个只读属性由构造函数一次性填好
    if (MobileParty.MainParty.IsCurrentlyAtSea)
    {
        return new CampaignOptionDisableStatus(
            true,
            "The junk drawer cannot be opened while at sea.");
    }

    return new CampaignOptionDisableStatus(false, string.Empty);
}
```

## 风险与边界

- **没有生命周期，也不需要**。这是本桶里唯一可以放心 `new` 出来然后丢掉的类型。没有 `OnFinalize`、没有事件注册、没有 native 资源。用 VM 的方式管理它（缓存、复用、Dispose）纯属自找麻烦。
- **`getValue` / `setValue` 是 null，不是"空实现"**。基类 `CampaignOptionData.GetValue()` 与 `SetValue(float)` 的实现就是无条件调这两个委托。任何数值型消费路径（难度预设读写、设置界面滑块刷新、存档同步）碰到动作型选项都会 NRE。`GetDataType()` 存在的唯一意义就是让消费方**避开**这条路径。
- **`ExecuteAction()` 无保护、无节流、无返回值**。它不检查 `enableState`、不检查 `getIsDisabledWithReason`、不返回"是否成功"、不吞异常。委托抛出的异常会直接冒到调用者。热键绑定或 AI 逻辑若直接调它，就是绕过界面灰置状态强行执行。
- **委托捕获 = 隐式生命周期**。`_action` 通常是一个方法组或闭包。如果传入的是捕获了 `this` 或某个视图模型的委托，而这一行又被 `CampaignOptionsManager` 缓存跨面板存活，你就延长了那个对象的寿命。模组实现里用 `static` 方法可以完全避开。
- **`CampaignOptionsManager` 的缓存意味着"产出被冻结"**。选项提供者的 `GetGameplayCampaignOptions()` 在管理器初始化时被调用并缓存，之后这一行不会因为外部状态变化而重新求值。想让一行动态地出现/消失（如原版 `EnableCheats` 那样按 `Input.IsGamepadActive` 决定），必须在**产出时**就决定，而不是在执行时。
- **序列化**：本类型不参与存档。但它承载的 `identifier` 会被设置界面的持久化逻辑当作选项键——改 identifier 会让玩家已有的该项偏好设置对不上号。
- **native 边界**：无。纯托管。
- **跨版本**：`CampaignOptionDataType.Action` 与 `CampaignOptionEnableState.Enabled` 在 v1.4.5 存在。`DefaultCampaignOptionsProvider` 的两条原版实例（`ResetTutorial`、`EnableCheats`）的 `priorityIndex` 同样是该版本的取值，不应假定跨版本稳定。

## 依赖关系

- ↑ 父类：[CampaignOptionData](../CampaignOptionData) —— 数值读写、文本查找、启用态与灰置原因都在基类
- ↔ 同级：[DefaultCampaignOptionsProvider](../DefaultCampaignOptionsProvider) —— 原版唯一的使用者，产出 `ResetTutorial` 与 `EnableCheats` 两行
- ↔ 同级：[CampaignOptionsManager](../CampaignOptionsManager) —— 反射实例化所有 `ICampaignOptionProvider` 并缓存产出
- ↔ 同级：[CampaignOptionsControllerVM](../CampaignOptionsControllerVM) —— 把汇总后的选项渲染成设置面板行
- ↔ 同级：[CampaignOptionDataType](../CampaignOptionDataType) —— `Action` 与其它选项形态的枚举
- ↔ 同级：[CampaignOptionEnableState](../CampaignOptionEnableState) —— `Enabled` / `Disabled` 等启用态
- → 战役对象引用：[MobileParty](../../campaign/MobileParty)；`Party` 在 v1.4.5 的 zh / en 树里都没有页面，故不链接
- ↑ 文本查找：[GameTextManager](../../core-extra/GameTextManager)

---
title: "AuxiliaryKeyGroupVM"
description: "选项界面里一个辅助按键分类（如「通用」「仅战役」）的视图模型。它按当前设备过滤 HotKey、建出子条目，并把「键位冲突」处理成自动对调——而不是拒绝或覆盖，这是本类型最值得注意的设计。"
---
# AuxiliaryKeyGroupVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class AuxiliaryKeyGroupVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys/AuxiliaryKeyGroupVM.cs`

## 概述

选项界面的辅助键位页按分类分组，每组若干行。本类是一组。

构造函数（`AuxiliaryKeyGroupVM.cs:59-68`）把四样东西收下：一个分类 id、一批 `HotKey`、一个按键绑定请求回调、一个额外信息回调，然后**立刻建条目并刷新**。

真正值得注意的是两处设计。

### 一、按当前设备过滤

`PopulateHotKeys()`（`:70-97`）在建每一条之前先问「这个 HotKey 在当前设备上有有效键位吗」：

```csharp
bool num;
if (!TaleWorlds.InputSystem.Input.IsGamepadActive)
{
    if (key == null) { continue; }
    num = key.DefaultKeys.Any((Key x) => x != null && x.IsKeyboardInput && x.InputKey != InputKey.Invalid);
}
else
{
    if (key == null) { continue; }
    num = key.DefaultKeys.Any((Key x) => x != null && x.IsControllerInput && x.InputKey != InputKey.Invalid);
}
if (num)
{
    HotKeys.Add(new AuxiliaryKeyOptionVM(key, _onKeybindRequest, SetHotKey, _getExtraInformation));
}
```

**键盘和手柄是两条互斥的路径。** 手柄模式下，一个只有键盘绑定的 HotKey 会被完全隐藏，而不是显示成灰色。这个过滤只发生在构造时——**设备切换靠 `OnGamepadActiveStateChanged()` 补救，而它只调 `Update()` 与 `OnDone()`，并不重新过滤或重建列表。**

### 二、冲突处理是「自动对调」，不是「拒绝」

`SetHotKey`（`:114-129`）是整个类里最有价值的逻辑：

```csharp
private void SetHotKey(AuxiliaryKeyOptionVM option, InputKey newKey)
{
    InputKey inputKey = option.CurrentKey.InputKey;
    if (newKey != inputKey)
    {
        option.CurrentKey.ChangeKey(newKey);
        option.OptionValueText = Module.CurrentModule.GlobalTextManager
            .GetHotKeyGameTextFromKeyID(option.CurrentKey.ToString().ToLower()).ToString();
        option.UpdateIsChanged();
        AuxiliaryKeyOptionVM auxiliaryKeyOptionVM = HotKeys.FirstOrDefault((AuxiliaryKeyOptionVM k) =>
            k != option && k.CurrentKey.InputKey == option.CurrentKey.InputKey && k.CurrentHotKey.HasSameModifiers(option.CurrentHotKey));
        auxiliaryKeyOptionVM?.Set(inputKey);
        if (auxiliaryKeyOptionVM != null)
        {
            MBInformationManager.AddQuickInformation(new TextObject("{=gb2S2aRq}Swapped {FIRST_KEY} and {SECOND_KEY}")
                .SetTextVariable("FIRST_KEY", option.Name)
                .SetTextVariable("SECOND_KEY", auxiliaryKeyOptionVM.Name), -1000);
        }
    }
}
```

当新键与某个已有条目的键**完全相同且修饰键也相同**时，它**不做冲突提示，而是静默把对方改成自己原来的键**，然后弹一条 "Swapped X and Y"。这与多数设置界面的"该键已被占用"处理方式相反。

## 谁在用它

唯一构造点：**`GameKeyOptionCategoryVM.cs:167`**

```csharp
AuxiliaryKeyGroups.Add(new AuxiliaryKeyGroupVM(auxiliaryKeyCategory.Key, auxiliaryKeyCategory.Value, _onKeybindRequest, GetExtraInformationText));
```

## 心智模型

把它读成**「一个自带冲突仲裁的按键分组；它不是列表容器，而是仲裁策略的持有者」**：

- **谁 new 它**：`GameKeyOptionCategoryVM`（`:167`），遍历分类字典构造。
- **谁持引用**：外层 `GameKeyOptionCategoryVM.AuxiliaryKeyGroups`（一个绑定列表），最终由选项屏幕持有。**注意 `SetHotKey` 这个方法被当委托交给了每个子条目**（`:94`），所以本类即使没有直接持有 `GameKeyOptionCategoryVM`，也通过委托间接持有它。
- **绑到哪个 View 属性**：只有两个——`HotKeys`（`MBBindingList<AuxiliaryKeyOptionVM>`）与 `Description`（分类显示名）。prefab 上这一组模板绑的就是这两个。
- **什么时候 Dispose**：**本类没有覆写 `OnFinalize`。** 它不注册 `CampaignEvents`、不注册 `Game.Current.EventManager`，只持有一个 `IEnumerable<HotKey>` 引用与三个回调。**所以它自身不泄漏**；真正的生命周期责任在 `GameKeyOptionCategoryVM`，以及由 `OnDone()` 决定何时把临时改动落到 `HotKey.Keys` 上。
- 🔴 **`Update()`、`IsChanged()` 都是 `internal`。** 只有 `OnDone()`、`OnGamepadActiveStateChanged()`、`RefreshValues()` 是 `public`。**模组无法主动驱动 `Update()`**——也就无法自行响应设备切换。
- 🔴 **设备切换不重建列表。** `OnGamepadActiveStateChanged()` 只做 `Update(); OnDone();`（`:159-163`）。`Update()` 逐条调 `AuxiliaryKeyOptionVM.Update()`，那会按当前设备重选 `Key`——但**构造时的过滤结果不变**。含义是：一个只绑定手柄的 HotKey，在切到键盘后仍然占着一行，只是键位显示变成 `InputKey.Invalid`。
- 🔴 **对调逻辑只在同一个分组内生效。** `HotKeys.FirstOrDefault(...)` 搜的是**本组的 `HotKeys`**，不是全局所有键位。**跨分类的冲突不会被对调。**
- **`HasSameModifiers` 是对调的必要条件。** 只有修饰键（Shift/Ctrl/Alt 组合）也相同的两个条目才会互换。`Ctrl+K` 与 `K` 不算冲突，因此不会被对调。
- **`SetHotKey` 是 private 但被当委托用。** 它以 `Action<AuxiliaryKeyOptionVM, InputKey>` 的形状传给每个 `AuxiliaryKeyOptionVM`（`:94`），后者在 `Set(InputKey)` 里回调它。**这是父子两层通过闭包耦合的地方**——改签名要同时改两边。
- **常见误用**：以为设了新键就立即生效。**不生效。** `Set` 只是改 `option.CurrentKey` 这个临时对象；真正写回 `HotKey.Keys` 要等 `OnDone()` → `AuxiliaryKeyOptionVM.OnDone()` → `base.Key.ChangeKey(base.CurrentKey.InputKey)`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AuxiliaryKeyGroupVM(string categoryId, IEnumerable<HotKey> keys, Action<KeyOptionVM> onKeybindRequest, Func<KeyOptionVM, string> getExtraInformation)`（`:59-68`） | 由 `GameKeyOptionCategoryVM.cs:167` 调用。存四个字段、建空 `HotKeys`、**立刻** `PopulateHotKeys()` + `RefreshValues()`。**过滤只在此刻发生一次。** |
| `HotKeys` | `[DataSourceProperty] public MBBindingList<AuxiliaryKeyOptionVM> HotKeys`（`:25-40`） | 本组的子条目列表。`PopulateHotKeys` 先 `Clear()` 再填；填充条件是"当前设备上有有效键位"。 |
| `Description` | `[DataSourceProperty] public string Description`（`:42-57`） | 分类显示名。优先取 `str_hotkey_category_name` + `_categoryId`，**取不到就退回 `_categoryId` 本身**（`:102-106`）——所以分类 id 是有意义的兜底文案。 |
| `PopulateHotKeys` | `private void PopulateHotKeys()`（`:70-97`） | 按 `Input.IsGamepadActive` 走互斥的键盘/手柄分支，各用 `DefaultKeys.Any(...)` 判断有无有效键位；跳过 null 的 HotKey。**私有，且只被构造函数调用。** |
| `SetHotKey` | `private void SetHotKey(AuxiliaryKeyOptionVM option, InputKey newKey)`（`:114-129`） | **冲突仲裁核心**。写入新键后搜本组内"键相同且修饰键相同"的另一条，**调用对方的 `Set(inputKey)` 把它换成自己原来的键**，再弹 "Swapped X and Y"。`private`，但作为委托交给每个子条目。 |
| `RefreshValues` | `public override void RefreshValues()`（`:99-112`） | 设 `Description`，然后对每个子条目 `RefreshValues()`。 |
| `Update` 🔴 | `internal void Update()`（`:131-137`） | 逐条 `hotKey.Update()`，让每个子条目按当前设备重选 `Key` 与文案。**模组无法调用。** |
| `IsChanged` 🔴 | `internal bool IsChanged()`（`:147-157`） | 遍历 `HotKeys` 看有没有 `IsChanged` 为真的条目。**模组无法调用**——所以你无法问"这一组有没有未保存的改动"。 |
| `OnDone` | `public void OnDone()`（`:139-145`） | 逐条 `hotKey.OnDone()`，把临时 `CurrentKey` 落到 `HotKey.Keys` 上。**这是设置真正生效的唯一时机。** |
| `OnGamepadActiveStateChanged` | `public void OnGamepadActiveStateChanged()`（`:159-163`） | 设备切换时的回调，只做 `Update(); OnDone();`。**不重新过滤或重建列表。** |

## 真实示例

读分类显示名——**注意 `_categoryId` 是 private 且没有公开访问器**，模组拿不到，必须自己保存一份：

```csharp
using TaleWorlds.Core;

public string ResolveGroupDescription(string categoryId)
{
    // categoryId 必须由调用方自己保存：AuxiliaryKeyGroupVM._categoryId 是
    // private readonly 且没有任何公开属性把它暴露出来。
    string description = categoryId;

    if (Module.CurrentModule.GlobalTextManager.TryGetText("str_hotkey_category_name", categoryId, out TextObject text))
    {
        description = text.ToString();
    }

    return description;
}
```

自己实现一份"检测到冲突就拒绝"的策略，用来对照原版的自动对调：

```csharp
public bool TryAssignStrictly(AuxiliaryKeyGroupVM group, AuxiliaryKeyOptionVM target, InputKey newKey)
{
    for (int i = 0; i < group.HotKeys.Count; i++)
    {
        AuxiliaryKeyOptionVM other = group.HotKeys[i];
        if (other != target
            && other.CurrentKey.InputKey == newKey
            && other.CurrentHotKey.HasSameModifiers(target.CurrentHotKey))
        {
            // 原版在这里调用 other.Set(...) 做对调，然后弹 Swapped 提示。
            // 换成拒绝：向调用方返回 false，让 UI 显示"该键已被占用"。
            MBInformationManager.ShowHint("Already used by " + other.Name);
            return false;
        }
    }

    target.Set(newKey);
    return true;
}
```

提交改动——**必须走 `OnDone`，否则只是改了临时对象**：

```csharp
public void CommitGroup(AuxiliaryKeyGroupVM group)
{
    // 逐条 Set 只改 option.CurrentKey 这个临时对象。
    // 真正写回 HotKey.Keys 的是 OnDone -> AuxiliaryKeyOptionVM.OnDone -> Key.ChangeKey。
    group.OnDone();
}
```

按当前设备重新挑一个条目——**注意用的是 `CurrentHotKey.DefaultKeys`，且要按设备分**：

```csharp
using System.Linq;
using TaleWorlds.InputSystem;

public bool HasAnyKeyOnCurrentDevice(AuxiliaryKeyOptionVM option)
{
    HotKey hotKey = option.CurrentHotKey;

    if (Input.IsGamepadActive)
    {
        return hotKey.DefaultKeys.Any(k => k != null && k.IsControllerInput && k.InputKey != InputKey.Invalid);
    }

    return hotKey.DefaultKeys.Any(k => k != null && k.IsKeyboardInput && k.InputKey != InputKey.Invalid);
}
```

## 风险与边界

- 🔴 **`Update()` 与 `IsChanged()` 是 `internal`，模组编译不过。**（`:131`、`:147`）持有方是同程序集的 `GameKeyOptionCategoryVM`。**你无法主动问"这组有没有未保存改动"，也无法手动驱动设备切换时的重选。** 这是本页最常见的编译错误。
- 🔴 **设备切换不重建列表。** `OnGamepadActiveStateChanged()` 只 `Update(); OnDone();`。构造时的键盘/手柄过滤结果保留，所以一个只绑定手柄的 HotKey 在键盘模式下**仍占一行**，只是显示为 `InputKey.Invalid`。
- 🔴 **冲突对调只在本组内生效。** 搜索范围是 `HotKeys`，不是全局键位表。**跨分类的冲突不会被对调**——两条不同分类的条目可以同时绑定同一个键。
- **`HasSameModifiers` 是对调的必要条件。** `Ctrl+K` 与裸 `K` 不构成冲突，不会互换。
- **`OnDone()` 之前所有改动都是临时的。** `Set(newKey)` 只改 `option.CurrentKey` 这个 `Key` 对象；写回 `HotKey.Keys` 靠 `OnDone()` → `AuxiliaryKeyOptionVM.OnDone()` → `base.Key.ChangeKey(base.CurrentKey.InputKey)`。**漏调 `OnDone` = 界面显示改了但实际没保存。**
- **`PopulateHotKeys()` 是私有的，只在构造函数调一次。** 想按新的设备状态重建分类，**没有公开入口**——只能构造一个新的本类。
- **委托耦合**：`SetHotKey` 作为 `Action<AuxiliaryKeyOptionVM, InputKey>` 传进每个子条目（`:94`）。改它的签名要同时改 `AuxiliaryKeyOptionVM` 的构造参数类型。
- **生命周期**：本类**不覆写 `OnFinalize`，不注册任何事件**，只持有 `IEnumerable<HotKey>` 与三个回调。**它自身不泄漏。** 真正的释放责任在 `GameKeyOptionCategoryVM`。间接持有它的是子条目里那个捕获了 `this` 的委托。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。按键最终通过 `HotKey` 侧持久化，本类不参与。
- **`Description` 可能等于原始 id。** 找不到 `str_hotkey_category_name` 时直接退回 `_categoryId`。**没配文本键的分类会显示内部 id**，这不是 bug，是兜底。
- 🔴 **`_categoryId` 没有公开访问器。** 它是 `private readonly string`（`:17`），本类**不提供**任何公开属性或方法把它交出去。模组若在构造时没自己留一份，**事后无法从实例读回分类 id**——只能读已经填好的 `Description`。
- **native 边界**：无。纯托管。但 `HotKey.Keys` 的最终持久化会触及输入系统的存储。
- **跨版本**：`HotKey.Modifiers` 的三个枚举值（`Alt` / `Shift` / `Control`）、`str_hotkey_category_name` / `str_hotkey_name` / `str_hotkey_description` / `str_hot_key_with_modifier` 四个文本键，以及 `GameKeyOptionCategoryVM.cs:167` 的调用形状都是 v1.4.5 的形状。

## 依赖关系

- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 属性变更通知与 `RefreshValues` 契约
- ↔ 同级：[AuxiliaryKeyOptionVM](../AuxiliaryKeyOptionVM) —— **本类产出的子条目**，`Set` / `OnDone` / `Update` / `UpdateIsChanged` 全在它上面
- ↔ 同级：[GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM) —— **唯一的构造方与持有方**（`GameKeyOptionCategoryVM.cs:167`）
- ↑ 父类：[KeyOptionVM](../KeyOptionVM) —— 子条目的基类，提供 `Name` / `Key` / `CurrentKey` / `IsChanged` 等
- → 键位数据：[HotKey](../../campaign-ext/HotKey)、[Key](../../campaign-ext/Key)、[InputKey](../../campaign-ext/InputKey)
- → 文本：[GameTextManager](../../core-extra/GameTextManager) 与 [Module](../../core/Module) 的 `GlobalTextManager`
- → 列表容器：[MBBindingList](../../core-extra/MBBindingList)

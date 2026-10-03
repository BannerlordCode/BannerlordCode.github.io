---
title: "ArmyCohesionStep1Tutorial"
description: "军队凝聚力教学第一步：被 [Tutorial] 特性自动发现的 TutorialItemBase 派生类，5 个 public 成员全是从基类来的 override；真正的判定逻辑是两个 TutorialContexts 字面量 4（MapWindow）与 10（ArmyManagement）。"
---

# ArmyCohesionStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class ArmyCohesionStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/ArmyCohesionStep1Tutorial.cs`

## 概述

一条 57 行的教学步骤：**「你的军队凝聚力低于 30，去军队管理界面处理一下」**。全文只有两个私有 bool 字段、一个构造函数、四个 override，加一个 `[Tutorial("ArmyCohesionStep1")]` 特性。

**它不需要手动注册。** `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs:605` 的 `RegisterTutorialTypes()` 遍历**所有已加载程序集的全部类型**，挑出 `TutorialItemBase` 的非抽象派生类，反射读 `[Tutorial]` 特性、再反射调无参构造函数：

```csharp
// GauntletTutorialSystem.cs:605-637（逐字节选）
foreach (Type type in AppDomain.CurrentDomain.GetAssemblies().SelectMany((Assembly a) => a.GetTypes()))
{
    if (typeof(TutorialItemBase).IsAssignableFrom(type) && !type.IsAbstract)
    {
        TutorialAttribute customAttribute = type.GetCustomAttribute<TutorialAttribute>();
        if (customAttribute == null)
        {
            Debug.FailedAssert("Tutorial: " + type.Name + " does not have a Tutorial attribute", ...);
        }
        else
        {
            ConstructorInfo constructor = type.GetConstructor(Type.EmptyTypes);
            if (constructor == null)
            {
                Debug.FailedAssert("Tutorial: " + type.Name + " does not have a parameterless constructor", ...);
            }
            else
            {
                TutorialItemBase item = (TutorialItemBase)constructor.Invoke(new object[0]);
                string id = customAttribute.TutorialIdentifier;
                ...
                this._mappedTutorialItems[id] = item;
                this._tutorialItemIdentifiers[item] = id;
            }
        }
    }
}
```

**这意味着写一条自己的教学只需要两件事：继承 `TutorialItemBase` + 挂 `[Tutorial("你的标识")]` + 提供无参构造函数。** 少任何一样都会 `Debug.FailedAssert`，且**那个 assert 里带着 Taleworlds 自己的构建机路径** `C:\BuildAgent\work\mb3\Source\Bannerlord\SandBox.GauntletUI\Tutorial\GauntletTutorialSystem.cs`。

## 心智模型

一条教学步骤的运行是三段：**能不能激活**（`IsConditionsMetForActivation`）→ **弹出并等玩家操作**（基类的事）→ **条件满足没有**（`IsConditionsMetForCompletion`）。

本类的状态机靠两个私有 bool 记住玩家做过什么：

```csharp
private bool _playerOpenedArmyManagement;   // :52
private bool _playerArmyNeedsCohesion;      // :55
```

四个 override 各司其职：

**构造函数（`:15-20`）设置三个基类字段：**

```csharp
public ArmyCohesionStep1Tutorial()
{
    base.Placement = TutorialItemVM.ItemPlacements.Right;
    base.HighlightedVisualElementID = "ArmyOverlayArmyManagementButton";
    base.MouseRequired = true;
}
```

`MouseRequired = true` 的语义是「玩家必须动鼠标」——不这么做的话，教玩家点按钮的提示会被自动跳过。

**`IsConditionsMetForActivation`（`:41-49`）是真正的判定，同时带副作用：**

```csharp
public override bool IsConditionsMetForActivation()
{
    bool playerArmyNeedsCohesion = this._playerArmyNeedsCohesion;
    Army army = MobileParty.MainParty.Army;
    float? num = (army != null) ? new float?(army.Cohesion) : null;
    float maxCohesionForCohesionTutorial = TutorialHelper.MaxCohesionForCohesionTutorial;
    this._playerArmyNeedsCohesion = (playerArmyNeedsCohesion
        | (num.GetValueOrDefault() < maxCohesionForCohesionTutorial & num != null));
    return TutorialHelper.CurrentContext == 4
        && MobileParty.MainParty.Army != null
        && MobileParty.MainParty.Army.LeaderParty == MobileParty.MainParty
        && MobileParty.MainParty.Army.Cohesion < TutorialHelper.MaxCohesionForCohesionTutorial;
}
```

注意 `this._playerArmyNeedsCohesion` 是**只升不降**的（`|` 而不是 `&&` 重新赋值）：一旦某帧检测到军队凝聚力低，这个标志就**永远为真**，即使后来凝聚力恢复了、玩家解散了军队。它是「曾经遇到过这个问题」的粘滞记忆。

**`GetTutorialsRelevantContext`（`:35-38`）返回硬编码字面量 `4`：**

```csharp
public override TutorialContexts GetTutorialsRelevantContext() { return 4; }
```

`TutorialContexts`（`TaleWorlds.Core/TutorialContexts.cs`）的顺序是 `None=0, PartyScreen=1, InventoryScreen=2, CharacterScreen=3, MapWindow=4, RecruitmentWindow=5, ClanScreen=6, KingdomScreen=7, Mission=8, EncyclopediaWindow=9, ArmyManagement=10, QuestsScreen=11, EducationScreen=12, OptionsScreen=13`。所以 **`4` 就是 `MapWindow`**，而 `IsConditionsMetForActivation` 里那个 `== 4` 是同一个值——**这条教学只在地图界面弹**。

**`OnTutorialContextChanged`（`:29-32`）监听玩家切到了军队管理界面：**

```csharp
public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)
{
    this._playerOpenedArmyManagement = (this._playerArmyNeedsCohesion && obj.NewContext == 10);
}
```

**`10` 是 `ArmyManagement`。** 而它被 `_playerArmyNeedsCohesion` 门控——**玩家必须在「军队凝聚力确实低」的时候进军队管理界面，这个标志才会被置位**。顺序反过来（先随意进一次军队管理，再掉凝聚力）就不算完成。

**`IsConditionsMetForCompletion`（`:23-26`）就是两个标志的与：**

```csharp
public override bool IsConditionsMetForCompletion()
{
    return this._playerArmyNeedsCohesion && this._playerOpenedArmyManagement;
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ArmyCohesionStep1Tutorial()` | 公开无参构造函数 | 被 `RegisterTutorialTypes` 反射调用。三个赋值都在基类字段上：`Placement = Right`（弹窗位置）、`HighlightedVisualElementID = "ArmyOverlayArmyManagementButton"`（要高亮的 Gauntlet 元素 id）、`MouseRequired = true`（要求玩家动过鼠标）。**构造函数跑在游戏启动阶段**，所以里面不能碰 Campaign 对象。 |
| `IsConditionsMetForActivation` | `public override bool IsConditionsMetForActivation()` | 四个条件与：地图上下文（`TutorialHelper.CurrentContext == 4`）、有军队、**玩家自己是军队统帅**（`Army.LeaderParty == MobileParty.MainParty`）、凝聚力 `< TutorialHelper.MaxCohesionForCohesionTutorial`。第三个条件是关键——**玩家只是军团一员时不弹这条教学**。**同时它有副作用**：把粘滞标志 `_playerArmyNeedsCohesion` 置上。 |
| `GetTutorialsRelevantContext` | `public override TutorialContexts GetTutorialsRelevantContext()` | 返回字面量 `4`（`MapWindow`）。基类用它决定这条教学在哪个界面上下文下才允许出现。 |
| `OnTutorialContextChanged` | `public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)` | 读 `obj.NewContext == 10`（`ArmyManagement`）并写 `_playerOpenedArmyManagement`。**注意写的是赋值不是累加**——每次上下文切换都会覆盖，所以玩家从军队管理界面切走时这个标志还留着，切到别的界面再切回别的界面它才被清。 |
| `IsConditionsMetForCompletion` | `public override bool IsConditionsMetForCompletion()` | 两个粘滞 bool 的与。无副作用、无日志。基类每帧（或每次上下文变化）轮询它来决定是否收掉这条教学。 |

两个私有字段 `_playerOpenedArmyManagement` / `_playerArmyNeedsCohesion` 都不进存档——**教学进度由教学系统自己单独持久化**，不靠 `SyncData`。

## 真实示例

**用法一：抄一条自己的教学。** 形状就是上面那个：`[Tutorial("Id")]` + 无参 ctor + 三个 override。

```csharp
using SandBox.GauntletUI.Tutorial;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

namespace MyMod.GauntletUI.Tutorial
{
    [Tutorial("MyModPartyWeightTutorial")]
    public class MyModPartyWeightTutorial : TutorialItemBase
    {
        private bool _isActivated;

        public MyModPartyWeightTutorial()
        {
            base.Placement = TutorialItemVM.ItemPlacements.Right;
            base.HighlightedVisualElementID = "PartyInventoryCapacityLabel";  // 必须是 prefab 里真实存在的元素 id
            base.MouseRequired = true;
        }

        public override TutorialContexts GetTutorialsRelevantContext()
        {
            return TutorialContexts.MapWindow;   // 建议写枚举名而不是裸 4
        }

        public override bool IsConditionsMetForActivation()
        {
            this._isActivated = (TutorialHelper.CurrentContext == TutorialContexts.MapWindow
                && Campaign.Current.CurrentMenuContext == null
                && MobileParty.MainParty != null
                && MobileParty.MainParty.IsActive
                && (float)MobileParty.MainParty.InventoryCapacity < MobileParty.MainParty.TotalWeightCarried);
            return this._isActivated;
        }

        // 复用官方的触发点：PartySpeedTutorial 用的是同一个事件，只是换成看重量。
        public override void OnPlayerInspectedPartySpeed(PlayerInspectedPartySpeedEvent obj)
        {
            if (this._isActivated)
            {
                this._seen = true;
            }
        }

        public override bool IsConditionsMetForCompletion()
        {
            return this._isActivated && this._seen;
        }

        private bool _seen;
    }
}
```

**三条隐含契约**（原类没写出来但必须满足）：

1. **无参构造函数会在 `RegisterTutorialTypes` 阶段被反射调用**，也就是游戏启动时、教学系统初始化时。所以构造函数里**绝对不能**访问 `Campaign.Current` 之类还没建立的对象——原类只做字段赋值，正是这个原因。
2. **`HighlightedVisualElementID` 必须是 prefab 里真实存在的元素 id**，否则高亮框找不到目标，教学会弹出来但高亮位置为空。`"ArmyOverlayArmyManagementButton"` 就是这种字符串契约，拼错没有任何反馈。
3. **`IsConditionsMetForActivation` 里带副作用是官方惯用法。** 隔壁的 `PartySpeedTutorial`（`StoryMode.GauntletUI/Tutorial/PartySpeedTutorial.cs`）写的是 `this._isActivated = (...); return this._isActivated;`——先算完存进字段再返回同一个字段，这样 `OnPlayerInspectedPartySpeed` 里的 `if (this._isActivated)` 才拿得到「本轮是否激活」。本类的 `ArmyCohesionStep1Tutorial` 用的是另一套等价写法（`_playerArmyNeedsCohesion` 粘滞 + 完成判定里与运算）。两种都能用，**关键是激活标志必须存在字段里给回调读**，否则事件回调无法区分「激活期间」和「非激活期间」。

**用法二：调试一条教学为什么不触发。** 因为激活判定分散在四个 override 里，最快的定位方式是自己打一遍：

```csharp
using SandBox.GauntletUI.Tutorial;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public static void DebugCohesionTutorial()
{
    Army army = MobileParty.MainParty.Army;

    System.Console.WriteLine("Context            = " + TutorialHelper.CurrentContext
        + " (需要 " + (int)TutorialContexts.MapWindow + " = MapWindow)");
    System.Console.WriteLine("MainParty.Army     = " + (army == null ? "null" : "有"));
    System.Console.WriteLine("是统帅吗           = " + (army != null && army.LeaderParty == MobileParty.MainParty));
    System.Console.WriteLine("Cohesion           = " + (army == null ? 0f : army.Cohesion)
        + " (阈值 " + TutorialHelper.MaxCohesionForCohesionTutorial + ")");
    System.Console.WriteLine("Step1 是否满足激活 = " + (TutorialHelper.CurrentContext == TutorialContexts.MapWindow
        && army != null
        && army.LeaderParty == MobileParty.MainParty
        && army.Cohesion < TutorialHelper.MaxCohesionForCohesionTutorial));
}
```

`TutorialHelper.MaxCohesionForCohesionTutorial` 恒返回 `30f`（`SandBox.GauntletUI/Tutorial/TutorialHelper.cs:637-642`，一个只有 getter 的常量属性），`TutorialHelper.CurrentContext` 转发到 `GauntletTutorialSystem.Current.CurrentContext`（`:97-103`）——**后者在教学系统未初始化时会抛**，所以上面这段调试代码也要放在游戏跑起来之后。

## 风险与边界

- **`_playerArmyNeedsCohesion` 只升不降。** 第 47 行是 `playerArmyNeedsCohesion | (num.GetValueOrDefault() < maxCohesionForCohesionTutorial & num != null)`——一旦为真就永远为真。后果是：**玩家曾经有过一次低凝聚力，之后每次从军队管理界面切出来都会被判定为「完成过这条教学」**。这个粘滞是有意设计的（教学不该在条件消失后回退），但如果你照抄这个形状却不想要粘滞，就不能直接用 `|`。
- **`num.GetValueOrDefault() < 阈值 & num != null` 的判断顺序是反直觉的。** `num` 是 `float?`，`GetValueOrDefault()` 在 null 时返回 0f，**0f < 30f 恒为 true**。所以真正拦住 null 分支的是后面的 `& num != null`。这里用的是**非短路的 `&` 而不是 `&&`**——两个操作数都会被求值。这是安全的（没有副作用），但把 `&` 写成 `&&` 也能得到相同结果，说明这里的 `&` 只是反编译产物。**照抄时用 `&&` 更安全**：一旦将来条件里加了副作用求值，`&` 会先执行右边。
- **`MobileParty.MainParty` 在这些方法里被无条件解引用。** 第 44 行 `MobileParty.MainParty.Army`、第 48 行又出现三次。裸战役的某些时序下 `MainParty` 可能为 null，**会直接 `NullReferenceException`**。而 `IsConditionsMetForActivation` 是被教学系统轮询调用的，崩了会连带影响整个教学系统。
- **`GetTutorialsRelevantContext` 返回裸字面量 `4`，不写枚举名。** 原类是反编译产物，但**你照抄时会继承这个可读性损失**。`4` 的含义只能靠去翻 `TaleWorlds.Core/TutorialContexts.cs` 才知道是 `MapWindow`，而**那个枚举的成员顺序是它在承载语义**——往中间插一个新值会静默改掉所有裸字面量。**自己写的时候一定写 `TutorialContexts.MapWindow`。**
- **`OnTutorialContextChanged` 里 `obj.NewContext` 是 `int` 而不是 `TutorialContexts`。** 所以 `obj.NewContext == 10` 这个比较在编译期不做类型检查，`obj.NewContext == 10` 与 `obj.NewContext == (int)TutorialContexts.ArmyManagement` 等价，但写错了编译也过。
- **`ArmyCohesionStep2Tutorial` 用的是完全不同的上下文常量。** `StoryMode.GauntletUI/Tutorial/ArmyCohesionStep2Tutorial.cs:44` 判的是 `TutorialHelper.CurrentContext == 10 && Campaign.Current.CurrentMenuContext == null && ...`。**两步骤的触发上下文完全相反**（Step1 = MapWindow，Step2 = ArmyManagement），抄错会做出一条永远不弹的兄弟步骤。
- **`[Tutorial]` 特性的标识冲突不会报错。** `RegisterTutorialTypes` 往 `this._mappedTutorialItems[tutorialIdentifier]` 里塞，**同名后者覆盖前者**，先注册的程序集赢还是后注册的赢取决于 `AppDomain` 程序集枚举顺序——**不可预测**。你用一个官方已在用的 id 会静默顶掉官方那条教学。
- **构造函数在游戏启动期被反射调用，不能有副作用。** 前面「用法一」的第 1 条隐含契约值得重复：这是 `[Tutorial]` 特性自动发现的代价。
- **`StoryMode.GauntletUI` 是模块工程，不是核心。** 裸战役（无 `StoryMode` 模块）里这整个类型不存在。

## 跨版本提示

`ArmyCohesionStep1Tutorial.cs` 在 `bannerlord-1.3.0` / `1.4.6` / `1.4.7` / `1.5.3` 四棵树里**5 个 public 成员与全部 private 成员的声明集合完全一致**——逐行比对 public 与 private 声明，**1.3.0 与 1.5.3 的差集都是空的**。文件字节数从 1771B 涨到 1852B，但增长不在成员声明上（推测是注释或格式）。

也就是说：**类名、`[Tutorial("ArmyCohesionStep1")]` 标识、两个 context 字面量（4 与 10）、三个基类字段赋值、两个私有 bool，全部跨 1.3 → 1.5 未变。** `TutorialContexts` 枚举本身（`None=0` … `OptionsScreen=13`）与 `TutorialHelper.MaxCohesionForCohesionTutorial`（恒 `30f`）也未变。

`GauntletTutorialSystem.RegisterTutorialTypes` 的自动发现机制同样未变——**1.5.3 上依然是「扫全部程序集 + 反射读特性 + 反射调无参 ctor」**。1.3.15 与 1.4.5 两棵树不含 `StoryMode.GauntletUI` 工程，无法作为中间版本对照。

**结论：一条自定义教学从 1.3.0 抄到 1.5.3 一行都不用改。** 唯一需要留意的是**你自己的 id 不能和官方撞名**，而官方教学条数在这几棵树里没有减少（`ArmyCohesionStep1` / `Step2` 都在）。

## 依赖关系

- 基类：[TutorialItemBase](../TutorialItemBase) 声明本类覆写的四个 `public virtual`（`IsConditionsMetForActivation` / `IsConditionsMetForCompletion` / `OnTutorialContextChanged` / `GetTutorialsRelevantContext`）以及本类在构造函数里赋的三个字段（`Placement` / `HighlightedVisualElementID` / `MouseRequired`）
- 定位枚举：[TutorialContexts](../../core-extra/TutorialContexts)（`TaleWorlds.Core`，`None=0 … OptionsScreen=13`，本类用 `MapWindow=4` 与 `ArmyManagement=10`）
- 常量来源：[TutorialHelper](../TutorialHelper) 的 `CurrentContext`（转发到 `GauntletTutorialSystem.Current`）与 `MaxCohesionForCohesionTutorial`（恒 `30f`）
- 展示形态：[TutorialItemVM](../TutorialItemVM) 提供 `ItemPlacements.Right` 枚举值与 `MouseRequired` 的 UI 语义
- 自动注册：[GauntletTutorialSystem](../GauntletTutorialSystem) 的 `RegisterTutorialTypes()` 反射扫描 + `TutorialAttribute` 特性；特性定义在 `SandBox.GauntletUI/Tutorial/TutorialAttribute.cs`，页面为 [TutorialAttribute](../TutorialAttribute)
- 判定数据：[MobileParty](../../campaign/MobileParty) 的 `.Army` 与 `Army.LeaderParty`，[Army](../../campaign/Army) 的 `.Cohesion`
- 兄弟步骤：`StoryMode.GauntletUI/Tutorial/ArmyCohesionStep2Tutorial.cs:44`，触发上下文与本类相反（`10` + `CurrentMenuContext == null`）
- 桶首页：[campaign-ext API 分区](../)
---
title: "CustomSallyOutMissionController"
description: "夺城战（sally out）的刷兵控制器：24 行，只为基类的唯一抽象方法填两个数——被围方与围城方各能出多少人。构造函数里有一处没做检查的向下转型。"
---

# CustomSallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSallyOutMissionController : SallyOutMissionController`
**Base:** `SallyOutMissionController`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs`

## 概述

夺城战（sally out，城破后出城反打的残局）的刷兵控制由 [SallyOutMissionController](../SallyOutMissionController/) 驱动，那个基类 272 行里塞满了城门开合计时器、攻方激活延迟、攻城器械禁用、逃兵位置覆写等等，唯独**有一件事它不知道**：你这一局到底有多少兵。它把这唯一一件不知道的事声明成了一个抽象方法——`protected abstract void GetInitialTroopCounts(out int besiegedTotalTroopCount, out int besiegerTotalTroopCount);`（`SallyOutMissionController.cs:101`）。

本类 24 行就是**这个抽象方法的唯一实现**（`CustomSallyOutMissionController.cs:19-23`）：把两个 `IBattleCombatant` 存进数组，然后各自读 `NumberOfHealthyMembers` 填进两个 `out` 参数。基类在 `AfterStart()` 里调它（`SallyOutMissionController.cs:67`），拿到的数进 `SetupInitialSpawn`（`:68`）。

v1.4.5 里它只有 2 个构造调用点，都在 [BannerlordMissions](../BannerlordMissions/) 的 `OpenSiegeMissionWithDeployment`（`BannerlordMissions.cs:160`）里：`isSallyOut` 为真时 `BannerlordMissions.cs:197`，`isReliefForceAttack` 为真时 `BannerlordMissions.cs:201`。注意第三分支——两者都不成立时挂的是 [CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler/)（`:205`），不是本类。

## 心智模型

把它当成**「给残局刷兵逻辑报两个人数」的一次性应答器**，不是控制器。四条推论：

第一，**它给出的数不是最终刷出来的兵，是上限。** 基类拿到你的两个数后先过 `AdjustTotalTroopCounts`（`SallyOutMissionController.cs:165`），按 `MissionAgentSpawnLogic.BattleSize` 的 25% / 75% 封顶（`:167-172`），再按比例互相压（`:173-183`）。然后 `SetupInitialSpawn` 只把**总数的 10%** 作为初始上场数（`:190-191`：`MathF.Ceiling(num * 0.1f)`，守方取被围方人数与它的较小值，攻方同理）。**你报 200 人，开局场上大约只有 20 个，剩下的走 1%/10% 的增援计时器慢慢来**（`:196` 的 `SallyOutReinforcementSpawnTimer(1f, 90f, 15f, 5)`）。把它当「刷兵数」改，会得到一场人数远少于预期的战斗。

第二，**构造函数把 `isSallyOutAmbush` 硬编码成 `true`，你改不了。** `: base(isSallyOutAmbush: true)`（`CustomSallyOutMissionController.cs:10`）。基类在 `OnDeploymentFinished` 里看到这个标志为真，就会 `Mission.Current.AddMissionBehavior(new SallyOutEndLogic())`（`SallyOutMissionController.cs:85-88`）。**用这个类就一定带 SallyOutEndLogic**，而 `isReliefForceAttack` 那条调用路径（`BannerlordMissions.cs:201`）同样会拿到这个伏击版行为。

第三，**构造函数签名写的是 `IBattleCombatant`，函数体里却硬转 `CustomBattleCombatant`。** `:14` 与 `:15` 是两次无检查向下转型 `(CustomBattleCombatant)defenderBattleCombatant` / `(CustomBattleCombatant)attackerBattleCombatant`。而 v1.4.5 里 `IBattleCombatant` 有两个实现类：`CustomBattleCombatant`（`CustomBattleCombatant.cs:9`）和 `PartyBase`（`PartyBase.cs:21`，也就是 `Party` / `Army`）。**传一个 `Party` 进来，构造函数当场抛 `InvalidCastException`。** 官方的两个调用点之所以安全，是因为 `OpenSiegeMissionWithDeployment` 的形参本来就声明成 `CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty`（`BannerlordMissions.cs:160`）——编译器在调用点就已经保证了，你只是在自己的代码里失去了这个保证。

第四，**参数顺序是「先守后攻」，不是「先攻后守」。** `_battleCombatants[0]` 读进 `besiegedTotalTroopCount`（`:21`），`_battleCombatants[1]` 读进 `besiegerTotalTroopCount`（`:22`）。基类里对应的常量也是这个序（`BesiegedTotalTroopRatio = 0.25f` 在 `SallyOutMissionController.cs:12`，`BesiegerInitialTroopRatio = 0.1f` 在 `:18`）。**调错顺序不会报错，只会得到一场人数比例完全颠倒的残局。**

还有一条边界：`NumberOfHealthyMembers` 只是 `_characters.Count`（`CustomBattleCombatant.cs:35`），**不含伤员、不含俘虏、不做任何存活过滤**。名字里的 Healthy 是误导。

## 如何使用

**拿法：** 只能 `new`，然后 `list.Add(...)` 塞进 mission behavior 列表——必须和 `DefaultBattleMissionAgentSpawnLogic` 在同一局里，因为基类在 `OnBehaviorInitialize` 用 `Mission.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>()` 取它（`SallyOutMissionController.cs:59`）。官方是先在 `BannerlordMissions.cs:193` 加 spawn logic，再在 `:197`/`:201` 加本类。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.MissionSpawnHandlers;

// 注意：形参声明成 IBattleCombatant，但内部会硬转 CustomBattleCombatant。
// 自己调用时必须保证传进去的确实是 CustomBattleCombatant，否则抛 InvalidCastException。
var controller = new CustomSallyOutMissionController(
    defenderBattleCombatant: myDefenderCombatant,   // -> _battleCombatants[0] -> besieged
    attackerBattleCombatant: myAttackerCombatant);  // -> _battleCombatants[1] -> besieger

missionBehaviors.Add(controller);
```

**最容易踩的一条：** 从战役层拿一个 `Party`（它实现了 `IBattleCombatant`，`PartyBase.cs:21`）直接传进去。签名类型检查通过，运行时在 `CustomSallyOutMissionController.cs:14` 抛 `InvalidCastException`。**构造前先 `is CustomBattleCombatant c ? c : throw` 或者老老实实按官方的 `CustomBattleCombatant` 形参去拿。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class CustomSallyOutMissionController : SallyOutMissionController`（`CustomSallyOutMissionController.cs:5`） | 命名空间是 `TaleWorlds.MountAndBlade.MissionSpawnHandlers`（`:3`），但**基类 `SallyOutMissionController` 在根命名空间 `TaleWorlds.MountAndBlade`**——继承与被继承分处两个命名空间，`using TaleWorlds.MountAndBlade;` 是必需的。 |
| `_battleCombatants` | `private readonly CustomBattleCombatant[] _battleCombatants;`（`:7`） | 长度固定为 2 的数组（`:12`）。`[0]` 是被围方、`[1]` 是围城方。`readonly` 引用不可换，但**数组元素本身可写**——这是全类唯一的存储。 |
| 构造函数 | `public CustomSallyOutMissionController(IBattleCombatant defenderBattleCombatant, IBattleCombatant attackerBattleCombatant)`（`:9`） | 形参类型是 [IBattleCombatant](../../core-extra/IBattleCombatant/) 接口，**但形参名已经说明了真实契约**：`defender` 在前、`attacker` 在后，与 `_battleCombatants[0]/[1]` 一一对应。唯一实现、公开、可重复调用。 |
| 基类构造调用 | `: base(isSallyOutAmbush: true)`（`:10`） | **硬编码 `true`，不接受外部影响。** 后果是 `SallyOutMissionController.OnDeploymentFinished` 一定会 `AddMissionBehavior(new SallyOutEndLogic())`（`SallyOutMissionController.cs:85-88`）。想要非伏击版行为只能自己另写一个兄弟类。 |
| 数组初始化 | `new CustomBattleCombatant[2] { (CustomBattleCombatant)defenderBattleCombatant, (CustomBattleCombatant)attackerBattleCombatant }`（`:12-16`） | 两次**无检查向下转型**。传 `Party` / `Army`（`PartyBase.cs:21` 实现了同一接口）会在这里抛 `InvalidCastException`，构造函数不会返回。 |
| `GetInitialTroopCounts` | `protected override void GetInitialTroopCounts(out int besiegedTotalTroopCount, out int besiegerTotalTroopCount)`（`:19`） | 覆写基类唯一的抽象方法（`SallyOutMissionController.cs:101`）。唯一调用点是基类的 `AfterStart()`（`:67`），拿到结果直接喂给 `SetupInitialSpawn`（`:68`）。**只在开局调一次，中途兵力变化不会重新触发。** |
| `besiegedTotalTroopCount` 的赋值 | `besiegedTotalTroopCount = _battleCombatants[0].NumberOfHealthyMembers;`（`:21`） | 读数组第 0 位。`NumberOfHealthyMembers` 在 `CustomBattleCombatant.cs:35` 就是 `_characters.Count`。**不做存活过滤**。 |
| `besiegerTotalTroopCount` 的赋值 | `besiegerTotalTroopCount = _battleCombatants[1].NumberOfHealthyMembers;`（`:22`） | 读数组第 1 位。语义同上一行。**两个 `out` 的顺序与形参顺序、与数组下标顺序三者一致**，没有可错的空间。 |

## 真实示例

对齐官方 `BannerlordMissions.cs:193` + `:197` 的组装顺序——spawn logic 必须先在列表里：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.MissionSpawnHandlers;

public static class MyModSallyOutBuilder
{
    // DefaultBattleMissionAgentSpawnLogic 的 ctor 是
    // (IMissionTroopSupplier[] suppliers, BattleSideEnum playerSide, Mission.BattleSizeType battleSizeType)
    // 见 DefaultBattleMissionAgentSpawnLogic.cs:106。
    // 注意 BattleSideEnum 是顶层类型（TaleWorlds.Core/BattleSideEnum.cs:3），
    // 而 BattleSizeType 是嵌在 Mission 里的（Mission.cs:331）。
    public static void AttachSallyOut(
        List<MissionBehavior> behaviors,
        IMissionTroopSupplier[] troopSuppliers,
        CustomBattleCombatant defender,
        CustomBattleCombatant attacker,
        bool isPlayerAttacker)
    {
        // 1) 先挂 spawn logic：基类 OnBehaviorInitialize 用
        //    GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>() 取它
        //    (SallyOutMissionController.cs:59)，取不到就是 null，SetupInitialSpawn 直接炸
        behaviors.Add(new DefaultBattleMissionAgentSpawnLogic(
            troopSuppliers, BattleSideEnum.Defender, Mission.BattleSizeType.SallyOut));

        // 2) 再挂本类。参数顺序与官方 BannerlordMissions.cs:197 完全一致：
        //    (!isPlayerAttacker) ? playerParty : enemyParty 作为 defender
        behaviors.Add(new CustomSallyOutMissionController(
            (!isPlayerAttacker) ? defender : attacker,
            isPlayerAttacker ? defender : attacker));
    }
}
```

自己造战斗方再传（注意必须真的是 `CustomBattleCombatant`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.MissionSpawnHandlers;

public static void BuildWithGuard(IBattleCombatant maybeDefender, IBattleCombatant maybeAttacker)
{
    // 防御式检查：签名说 IBattleCombatant，函数体要 CustomBattleCombatant
    CustomBattleCombatant defender = maybeDefender as CustomBattleCombatant;
    CustomBattleCombatant attacker = maybeAttacker as CustomBattleCombatant;
    if (defender == null || attacker == null)
    {
        // 不这样做的话，异常会发生在 CustomSallyOutMissionController.cs:14
        throw new System.InvalidCastException(
            "CustomSallyOutMissionController 内部硬转 CustomBattleCombatant；" +
            "传进来的却是 " + (maybeDefender?.GetType().Name ?? "null"));
    }

    var controller = new CustomSallyOutMissionController(defender, attacker);
    Mission.Current.AddMissionBehavior(controller);
}
```

看清「报上去的数」和「实际开局的数」差多少（对应 `SallyOutMissionController.cs:190-191`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void ReportSallyOutSizing(CustomBattleCombatant besieged, CustomBattleCombatant besieger)
{
    int besiegedTotal = besieged.NumberOfHealthyMembers;   // CustomBattleCombatant.cs:35
    int besiegerTotal = besieger.NumberOfHealthyMembers;
    int sum = besiegedTotal + besiegerTotal;

    // 基线算法（SallyOutMissionController.cs:190-191）：
    // 先自己确认一遍，别指望基类的 Min 会帮你兜底
    int ceil10 = TaleWorlds.Library.MathF.Ceiling(sum * 0.1f);
    int defenderInitial = TaleWorlds.Library.MathF.Min(besiegedTotal, ceil10);
    int attackerInitial = TaleWorlds.Library.MathF.Min(besiegerTotal, ceil10);

    Debug.Print("reported " + besiegedTotal + " / " + besiegerTotal
              + "  ->  initial spawn " + defenderInitial + " / " + attackerInitial, 0);
    // 之后再被 AdjustTotalTroopCounts(:165) 按 BattleSize 的 25%/75% 压过一遍
}
```

不用本类、自己实现唯一那个抽象方法（可控制 `isSallyOutAmbush`）：

```csharp
using TaleWorlds.MountAndBlade;

// SallyOutMissionController.cs:52 的构造函数接受 isSallyOutAmbush 参数，
// 本类把它写死成 true（CustomSallyOutMissionController.cs:10）；要 false 就自己派生。
public class MyModSallyOutController : SallyOutMissionController
{
    private readonly int _besieged;
    private readonly int _besieger;

    public MyModSallyOutController(int besieged, int besieger)
        : base(isSallyOutAmbush: false)
    {
        _besieged = besieged;
        _besieger = besieger;
    }

    protected override void GetInitialTroopCounts(out int besiegedTotalTroopCount, out int besiegerTotalTroopCount)
    {
        besiegedTotalTroopCount = _besieged;
        besiegerTotalTroopCount = _besieger;
    }
}
```

## 风险与边界

- **`isSallyOutAmbush` 恒为 `true`**（`:10`）。用这个类就一定挂 `SallyOutEndLogic`（`SallyOutMissionController.cs:87`），解围军（`isReliefForceAttack`）那条路也一样。
- **构造函数的形参类型是谎言。** 声明 `IBattleCombatant`，函数体硬转 `CustomBattleCombatant`（`:14`/`:15`）。传 `Party` / `Army` 抛 `InvalidCastException`。
- **它给的数会被基线算法重写。** `AdjustTotalTroopCounts`（`SallyOutMissionController.cs:165`）按 `BattleSize` 的 25%/75% 封顶再互相按比例压；`SetupInitialSpawn`（`:186`）只放 10% 上场。**别把它当「生成人数」。**
- **只在 `AfterStart()` 被问一次**（`SallyOutMissionController.cs:67`）。战斗中增减兵力不会重新协商初始配置。
- **顺序敏感。** `[0]` 被围、`[1]` 围城。传反了不报错。
- **`NumberOfHealthyMembers` 不做存活过滤**，就是 `_characters.Count`（`CustomBattleCombatant.cs:35`）。
- **`readonly` 只锁引用不锁内容。** `_battleCombatants` 是 `readonly` 字段（`:7`），但数组元素可被外部拿到引用后改写——不过字段是 `private`，实际上没人拿得到，除非你自己在派生类里暴露。
- **基类是 `abstract`**（`SallyOutMissionController.cs:10`），**不能直接 `new`**。想改行为只有两条路：继承本类，或像示例那样直接继承基类。
- **`MissionCombatantsLogic` 才是真正的阵营分配点**（`BannerlordMissions.cs:189`），本类只管人数。**两个数报得再准，也不会改变谁站哪边。**

## 依赖关系

- 基类：[SallyOutMissionController](../SallyOutMissionController/)（272 行），本类要覆写的抽象方法在 `SallyOutMissionController.cs:101`，构造函数在 `:52`
- 唯一被实现的契约：`GetInitialTroopCounts(out int, out int)`，消费点是 `AfterStart()`（`SallyOutMissionController.cs:67`）与 `SetupInitialSpawn`（`:68` / `:186`）
- 人数来源：[CustomBattleCombatant](../CustomBattleCombatant/)（`CustomBattleCombatant.cs:9` 声明，`NumberOfHealthyMembers` 在 `:35`），契约接口 [IBattleCombatant](../../core-extra/IBattleCombatant/)
- 另一个接口实现（所以才是陷阱）：`PartyBase`（`PartyBase.cs:21`），即战役层的 `Party` / `Army`
- 注册处：[BannerlordMissions](../BannerlordMissions/) 的 `OpenSiegeMissionWithDeployment`（`BannerlordMissions.cs:160`），调用点 `:197` 与 `:201`，兄弟分支 [CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler/) 在 `:205`
- 协作对象：[DefaultBattleMissionAgentSpawnLogic](../DefaultBattleMissionAgentSpawnLogic/)（`BannerlordMissions.cs:193` 先挂，基类在 `SallyOutMissionController.cs:59` 取）、[MissionCombatantsLogic](../MissionCombatantsLogic/)（`:189`）、[MissionSpawnSettings](../MissionSpawnSettings/)、[SallyOutReinforcementSpawnTimer](../SallyOutReinforcementSpawnTimer/)（`SallyOutMissionController.cs:196`）、[SallyOutEndLogic](../SallyOutEndLogic/)（`:87`）、[TeamAIComponent](../TeamAIComponent/)（`:71`）
- 桶首页：[mission-ext API 分区](../)

---
title: "AxisType"
description: "GameAxisKey 的嵌套二值枚举（X / Y）：全树唯一读法是 GameAxisKey.GetAxisState 里那个 if-else 三分支，任何其他值都退化成恒返回 0f。1.3.0 共 8 处构造，全部显式传参。"
---

# AxisType

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public enum AxisType`
**Base:** 无
**File:** `TaleWorlds.InputSystem/GameAxisKey.cs`（枚举本体在 :101-107）

## 概述

它是 [GameAxisKey](../GameAxisKey) 的**嵌套枚举**，声明在那个类体内，命名空间仍是 `TaleWorlds.InputSystem`。代码里必须写全名 `GameAxisKey.AxisType`。两个成员，没有显式赋值：

```csharp
public enum AxisType
{
    X,   // :104  → 0
    Y    // :106  → 1
}
```

它回答的问题只有一个：**一根摇杆同时有 X/Y 两个方向，这条轴要取哪一维。**

## 心智模型

链路是四跳，中间两跳都在 `GameAxisKey.cs` 里。

**第一跳：注册。** 消费它的一共两个文件、六处构造：

```csharp
// TaleWorlds.MountAndBlade/GenericGameKeyContext.cs:41-44（逐字节选）
base.RegisterGameAxisKey(new GameAxisKey("MovementAxisX", InputKey.ControllerLStick, gameKey4, gameKey3, GameAxisKey.AxisType.X), true);
base.RegisterGameAxisKey(new GameAxisKey("MovementAxisY", InputKey.ControllerLStick, gameKey, gameKey2, GameAxisKey.AxisType.Y), true);
base.RegisterGameAxisKey(new GameAxisKey("CameraAxisX", InputKey.ControllerRStick, null, null, GameAxisKey.AxisType.X), true);
base.RegisterGameAxisKey(new GameAxisKey("CameraAxisY", InputKey.ControllerRStick, null, null, GameAxisKey.AxisType.Y), true);

// TaleWorlds.MountAndBlade/MapHotKeyCategory.cs:79-80
base.RegisterGameAxisKey(new GameAxisKey("MapMovementAxisX", InputKey.ControllerLStick, gameKey3, gameKey4, GameAxisKey.AxisType.X), true);
base.RegisterGameAxisKey(new GameAxisKey("MapMovementAxisY", InputKey.ControllerLStick, gameKey, gameKey2, GameAxisKey.AxisType.Y), true);
```

六个轴键名成一个明确的三组模式：

| 轴键名 | 物理摇杆 | AxisType |
| --- | --- | --- |
| `MovementAxisX` | 左摇杆 ControllerLStick | X |
| `MovementAxisY` | 左摇杆 ControllerLStick | Y |
| `CameraAxisX` | 右摇杆 ControllerRStick | X |
| `CameraAxisY` | 右摇杆 ControllerRStick | Y |
| `MapMovementAxisX` | 左摇杆 ControllerLStick | X |
| `MapMovementAxisY` | 左摇杆 ControllerLStick | Y |

**注意 `CameraAxisX/Y` 的 `positiveKey` 与 `negativeKey` 都是 `null`**——右摇杆没有键盘替代绑定。而左摇杆那四个都带 keyboard `GameKey`。这直接决定了 `GetAxisState` 走哪条分支（见下）。

**第二跳：按 Id 查。** UI 层按字符串 id 从热键类别里取轴键，官方三处（`SandBox.GauntletUI/BannerEditor/BannerEditorView.cs:99-100`、`CharacterCreationClanNamingStageView.cs:73-74`、`CharacterCreationOptionsStageView.cs:48-49` 等）都长这样：

```csharp
GameAxisKey gameAxisKey = HotKeyManager.GetCategory("FaceGenHotkeyCategory").RegisteredGameAxisKeys
    .FirstOrDefault((GameAxisKey x) => x.Id == "CameraAxisX");
```

**第三跳：读值。** [InputContext](../InputContext) 的 `GetGameKeyAxis`（`TaleWorlds.InputSystem/InputContext.cs:322-334`）：

```csharp
public float GetGameKeyAxis(GameAxisKey gameKey)
{
    return gameKey.GetAxisState(this.IsKeysAllowed,
        this.IsMouseButtonAllowed && this.MouseOnMe,
        this.IsMouseWheelAllowed,
        this.IsControllerAllowed);
}

public float GetGameKeyAxis(string gameKey)
{
    GameAxisKey gameKey2;
    if (this._registeredGameAxisKeys.TryGetValue(gameKey, out gameKey2))
    {
        return this.GetGameKeyAxis(gameKey2);
    }
    // 未注册的名字：返回一个字面量 0
}
```

**第四跳：`AxisType` 真正被读的唯一位置。** `GameAxisKey.GetAxisState`（`:63-87`）：

```csharp
public float GetAxisState(bool isKeysAllowed, bool isMouseButtonAllowed, bool isMouseWheelAllowed, bool isControllerAllowed)
{
    GameKey positiveKey = this.PositiveKey;
    bool flag = positiveKey != null && positiveKey.IsDown(isKeysAllowed, isMouseButtonAllowed, isMouseWheelAllowed, isControllerAllowed, false);
    GameKey negativeKey = this.NegativeKey;
    bool flag2 = negativeKey != null && negativeKey.IsDown(isKeysAllowed, isMouseButtonAllowed, isMouseWheelAllowed, isControllerAllowed, false);

    if (flag || flag2)
    {
        return (flag ? 1f : 0f) - (flag2 ? 1f : 0f);   // 键盘分支：±1 或 0
    }

    Vec2 keyState = new Vec2(0f, 0f);
    if (this.AxisKey != null && this.IsKeyAllowed(this.AxisKey, isKeysAllowed, isMouseButtonAllowed, isMouseWheelAllowed, isControllerAllowed))
    {
        keyState = this.AxisKey.GetKeyState();          // 摇杆分支：取整个 Vec2
    }

    if (this.Type == GameAxisKey.AxisType.X) { return keyState.X; }
    if (this.Type == GameAxisKey.AxisType.Y) { return keyState.Y; }
    return 0f;
}
```

**读法就这两行。** 摇杆返回的是完整 `Vec2`，`AxisType` 负责把它投影到某一维。

## 关键成员

| 成员 | 值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `X` | 0 | 取摇杆状态的 X 分量。四个官方轴键用（`MovementAxisX` / `CameraAxisX` / `MapMovementAxisX`），`BannerEditorView` 的相机水平旋转读它。 |
| `Y` | 0→1 | 取摇杆状态的 Y 分量。两个官方轴键用（`MovementAxisY` / `MapMovementAxisY`），`BannerEditorView` 的相机俯仰读它。 |

**全树没有任何其他成员、没有 `Count` 哨兵、没有「未指定」值。** `GameAxisKey` 构造函数的第五个参数有默认值 `GameAxisKey.AxisType.X`（`:45`）——**不传就是 X，不是「自动」**。

## 真实示例

**用法一：读一根摇杆轴（照抄官方调用形状）。**

```csharp
using TaleWorlds.InputSystem;
using TaleWorlds.MountAndBlade;

// 取一根 InputContext：它挂在 SceneLayer 上（BannerEditorView / MapScreen 都有
// 自己的 public SceneLayer 属性），GetGameKeyAxis 是这条链上唯一能读轴键的方法。
// 例如从一个持有 SceneLayer 的视图里：
//   InputContext input = myView.SceneLayer.Input;

// 相机水平（CameraAxisX 是 AxisType.X）
float turn = input.GetGameKeyAxis("CameraAxisX");
// 相机俯仰（CameraAxisY 是 AxisType.Y）
float pitch = input.GetGameKeyAxis("CameraAxisY");

if (Math.Abs(turn) > 0.01f)
{
    RotateCameraBy(turn * 600f * input.GetMouseSensitivity());
}
```

`BannerEditorView.HandleUserInput`（`:481-505`）就是这两个调用的原样：

```csharp
if (Input.IsGamepadActive)
{
    float num5 = this.SceneLayer.Input.GetGameKeyAxis("CameraAxisX") * -1f;
    this.NormalizeControllerInputForDeadZone(ref num5, 0.1f);
    num6 = num5 * 600f * this.SceneLayer.Input.GetMouseSensitivity() * dt;

    float gameKeyAxis = this.SceneLayer.Input.GetGameKeyAxis("CameraAxisY");
    this.NormalizeControllerInputForDeadZone(ref gameKeyAxis, 0.1f);
    num7 = gameKeyAxis * 2f * dt;
}
```

注意 X 被乘了 `-1f` 而 Y 没有——**这是「向上推摇杆 = 相机抬头」的符号约定，不是 `AxisType` 决定的**。

**用法二：注册自己的一根轴键。** 这是 `AxisType` 唯一有意义的使用场景。

```csharp
using TaleWorlds.InputSystem;
using TaleWorlds.Library;

// TaleWorlds.InputSystem/GameKeyContext.cs:112
// protected internal void RegisterGameAxisKey(GameAxisKey gameKey, bool addIfMissing = true)
// —— 与 TaleWorlds.MountAndBlade/GenericGameKeyContext.cs:41 逐字同构
this.RegisterGameAxisKey(
    new GameAxisKey(
        "MyModZoomAxis",          // id：之后靠 GetGameKeyAxis("MyModZoomAxis") 取
        InputKey.ControllerLStick,
        positiveKey: null,        // 无键盘正向绑定
        negativeKey: null,        // 无键盘负向绑定
        type: GameAxisKey.AxisType.Y),
    addIfMissing: true);

// 读
float zoomAxis = this.Input.GetGameKeyAxis("MyModZoomAxis");
```

**第四个参数 `type` 是 `AxisType`，第五个 `addIfMissing` 是 `RegisterGameAxisKey` 自己的参数**——两者不是一回事，别在调用处混。（`RegisterGameAxisKey` 声明在 `GameKeyContext` 上，是 `protected internal`，所以只能在 `GameKeyContext` 派生类内部调用。）

## 风险与边界

- **越界的 `AxisType` 值静默退化成恒 0，永不报错。** `GetAxisState` 的收尾是 `if (Type == X) return keyState.X; if (Type == Y) return keyState.Y; return 0f;`。传 `(GameAxisKey.AxisType)99` 会让这根轴**永远读到 0**，没有任何异常、没有任何日志。构造函数也不做 `Enum.IsDefined` 校验。**如果你从配置/XML 里读一个 int 造轴键，非法值的表现是「摇杆完全不动」而不是崩溃。**
- **构造函数第五参数有默认值 `AxisType.X`，不是「自动」。** `GameAxisKey(string id, InputKey axisKey, GameKey positiveKey, GameKey negativeKey, GameAxisKey.AxisType type = GameAxisKey.AxisType.X)`（`:45`）。**漏传第四/第五参数容易漏成第三个**——`positiveKey` / `negativeKey` 是必需参数，没有默认值，编译器会挡下来；但 `type` 漏了不报错，**默认拿到 X 而不是「无轴」**。
- **键盘分支完全绕过 `AxisType`。** `GetAxisState` 前半段是 `if (flag || flag2) return (flag ? 1f : 0f) - (flag2 ? 1f : 0f);`——**当 positive/negative 键盘键里有一个被按住时直接返回 ±1 / 0，`AxisType` 和 `AxisKey` 都不参与**。所以 `MovementAxisY` 在键盘映射下按「上/下」返回 1/-1，而在手柄下按摇杆 Y 分量返回连续值。**同一个轴键在两种输入设备下量纲不同**（离散三值 vs 连续 [-1,1]），混用会得到不一致的速度。
- **`CameraAxisX/Y` 的 positive/negative 都是 `null`，所以它们永远走摇杆分支。** 键盘玩家无法用键盘控制角色创建/横幅编辑界面的相机视角——想给键盘玩家这个功能，必须传非 null 的 `GameKey`。
- **摇杆值不钳制。** `keyState = this.AxisKey.GetKeyState()` 拿到的 `Vec2` 直接取分量，没有 `Mathf.Clamp`。手柄漂移或第三方手柄驱动返回超范围值时，相机速度会超出预期（`BannerEditorView` 那一侧靠 `NormalizeControllerInputForDeadZone` 自己处理死区，引擎这一侧不处理）。
- **`IsKeyAllowed` 的四个开关来自 `InputContext` 的输入限制状态，不是常量。** `GetAxisState` 的签名带四个 bool，逐个传给 `Key.IsKeyboardInput` / `IsMouseButtonInput` / `IsMouseWheelInput` / `IsControllerInput` 做分类过滤。`InputContext.GetGameKeyAxis` 里 `isMouseButtonAllowed` 额外与了 `this.MouseOnMe`——**鼠标不在本层上时鼠标输入被静默排除**。
- **按名字查找失败返回 0，不返回 null 也不报错。** `InputContext.GetGameKeyAxis(string)` 的 `_registeredGameAxisKeys.TryGetValue` 失败分支返回字面量 `0f`。轴键 id 拼错的表现是「这根轴永远是 0」，没有任何提示。**而 id 是纯字符串约定**（`"CameraAxisX"` 只出现在引擎的注册代码和若干 UI 调用点里），没有常量表、没有校验。
- **`ToString()` 返回的是 `AxisKey.ToString()`，不是 `Id`。** `GameAxisKey.ToString()`（`:90-98`）：`string result = ""; if (this.AxisKey != null) { result = this.AxisKey.ToString(); } return result;`。**拿它当轴键名字用是错的**——要 id 请读 `Id` 属性。
- **`IsBinded` 是 `internal`，你读不到。** `internal bool IsBinded { get; private set; }`（`:42`），构造函数里 `this.IsBinded = (this.PositiveKey != null || this.NegativeKey != null);`。mod 在外部程序集里**无法判断一根轴键到底绑没绑键盘**，只能自己检查 `PositiveKey` / `NegativeKey` 是否为 null（那两个是 public）。
- **它是嵌套类型，`using` 导入不了。** `using TaleWorlds.InputSystem;` 只导入命名空间，`GameAxisKey.AxisType` 必须写全名，或者额外 `using static TaleWorlds.InputSystem.GameAxisKey;`（那样才能裸写 `AxisType.X`）。

## 跨版本提示

`GameAxisKey.cs` 在 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树里**公开面完全冻结**：同样是 9 个成员（6 个属性 + 构造函数 + `IsKeyAllowed` + `GetAxisState` + `ToString`）+ 嵌套 `AxisType` 两值。逐行比对 1.3.0 与 1.5.3 的 public/protected 声明集合，**差集为空**。

字节数上 1.3.0 是 2480B、其余四棵是 2472B，差 8 字节——**不是成员变化**（public 与 private 声明差集都是空），推测是格式或注释。`AxisType` 的两个成员、顺序、值、构造函数第五参数的默认值 `GameAxisKey.AxisType.X`、`GetAxisState` 收尾那个 `return 0f` 兜底，在五棵树里逐字一致。

两个消费点 `GenericGameKeyContext.cs:41-44` 与 `MapHotKeyCategory.cs:79-80` 的六个轴键注册——**名字、`InputKey`、`AxisType` 全部未变**，`CameraAxisX/Y` 的 `null` 键盘绑定也未变。

`InputContext.GetGameKeyAxis` 的两个重载（`GameAxisKey` 与 `string`）同样未变，`string` 版查找失败返回 `0f` 的行为也未变。1.4.5 树是裁剪过的部分源码，无法作为对照。

**结论：`AxisType` 与 `GameAxisKey` 从 1.3.0 到 1.5.3 一个成员都没动，你的注册与读取代码不需要为升级改任何一行。** 需要注意的只有一点：六个官方轴键名是跨版本稳定的公开字符串契约，可以放心硬编码；而你自己新增的轴键名如果和未来版本新加的官方轴键撞名，`_registeredGameAxisKeys` 字典会被覆盖，**顺序不确定**。

## 依赖关系

- 宿主类：[GameAxisKey](../GameAxisKey)（`TaleWorlds.InputSystem`），本枚举是它的嵌套类型；`Type` 是它的 `{ get; private set; }` 属性，**只由构造函数写一次**
- 唯一读点：同文件 `GetAxisState(bool, bool, bool, bool)`（`:78-86`），那个 `if (X) / if (Y) / return 0f` 三分支
- 上游读取：[InputContext](../InputContext) 的 `GetGameKeyAxis(GameAxisKey)` 与 `GetGameKeyAxis(string)`（`:322-334`），后者靠 `_registeredGameAxisKeys` 字典按 id 查
- 官方注册点：`TaleWorlds.MountAndBlade/GenericGameKeyContext.cs:41-44`（4 个）与 `TaleWorlds.MountAndBlade/MapHotKeyCategory.cs:79-80`（2 个）
- 消费范例：`SandBox.GauntletUI/BannerEditor/BannerEditorView.cs:99-102`（按 `Id == "CameraAxisX"/"CameraAxisY"` 取并显示按键名）与 `:481-505`（`GetGameKeyAxis` 驱动相机）
- 检索入口：[HotKeyManager](../HotKeyManager) 的 `GetCategory("FaceGenHotkeyCategory")` 返回的类别上有 `RegisteredGameAxisKeys`
- 物理按键类型：[InputKey](../InputKey)（`ControllerLStick` / `ControllerRStick`），键盘替代绑定是 [GameKey](../GameKey)，摇杆状态载体是 `TaleWorlds.Library` 的 `Vec2`
- 桶首页：[campaign-ext API 分区](../)
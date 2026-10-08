# brief · j3-batch（5 页：给重名 basename 的引用补路径前缀消歧）

## 任务
全树**只剩 5 页 FAIL**，且**全部是同一个原因**：
```
✗ J3 ambiguous-citations —— 「重名 basename 无法判定 ⇒ fail closed；引用须带路径后缀消歧」
```
**修法（唯一）**：把这些引用从 `X.cs:N` 改成 **`<相对路径>/X.cs:N`**（**行号不变**，只补路径前缀）。

## 为什么必须补路径
这些 `.cs` 文件名在树里有 **2 份**，判分器**不猜** ⇒ fail closed。补上前缀即可唯一确定：
```
EventManager.cs  → 2 份：TaleWorlds.Library/EventSystem/EventManager.cs
                          TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs
FaceGen.cs       → 2 份：TaleWorlds.Core/FaceGen.cs
                          TaleWorlds.MountAndBlade/FaceGen.cs
Module.cs        → 2 份：mscorlib/System/Reflection/Module.cs
                          TaleWorlds.MountAndBlade/Module.cs
```

## 逐页清单（判分器实测，含**该页自己的主语** ⇒ 用它作为消歧前缀）
| 页 | 主语（消歧前缀） | 待消歧引用 |
|---|---|---|
| `core-extra/EventBase.md` | `TaleWorlds.Library/EventSystem/EventManager.cs` | **14 条** `EventManager.cs:N` |
| `core-extra/EventManager.md` | `TaleWorlds.Library/EventSystem/EventManager.cs` | **7 条** `EventManager.cs:N` |
| `core-extra/FaceGen.md` | `TaleWorlds.Core/FaceGen.cs` | **8 条** `FaceGen.cs:N` |
| `core-extra/Monster.md` | `TaleWorlds.Core/FaceGen.cs`（**非**主语文件！该页主语是 `Monster.cs`） | **3 条** `FaceGen.cs:N` |
| `core/MBSubModuleBase.md` | `TaleWorlds.MountAndBlade/Module.cs`（**非**主语文件！该页主语是 `MBSubModuleBase.cs`） | **3 条** `Module.cs:N` |

**⚠ 两条最容易错的**：
- `Monster.md` 引的是 **`FaceGen.cs`**（不是它自己的主语）⇒ 前缀用 **`TaleWorlds.Core/`**（`TaleWorlds.Core/FaceGen.cs`）—— 那是该页实际讨论的那个 FaceGen（外观系统门面），**不是** `TaleWorlds.MountAndBlade/FaceGen.cs`。
- `MBSubModuleBase.md` 引的是 **`Module.cs`** ⇒ 前缀用 **`TaleWorlds.MountAndBlade/`**（`TaleWorlds.MountAndBlade/Module.cs`）—— **不是** `mscorlib/System/Reflection/Module.cs`。
**判据：先看该引用所在的句子在讲哪个类型**；拿不准就 `awk 'NR=<行号>' <两个候选文件>` 看哪一份的该行与页面文字吻合。

## 硬规则
1. **只补路径前缀，行号一个字都不改**。例：`` `EventManager.cs:16` `` → `` `TaleWorlds.Library/EventSystem/EventManager.cs:16` ``
2. **不要改任何其它内容**（散文/链接/代码块原样）。
3. **不得为消 J3 而删句子或删引用**。
4. 不动 `_index.md`；不 `git add`/`commit`；不改 `tools/**`；**禁止 `git commit --amend`**。

## 验收
```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.4.6/zh/api/core-extra/EventBase.md content/v1.4.6/zh/api/core-extra/EventManager.md content/v1.4.6/zh/api/core-extra/FaceGen.md content/v1.4.6/zh/api/core-extra/Monster.md content/v1.4.6/zh/api/core/MBSubModuleBase.md
# 期望：5 页全 PASS（ambiguous=0）
node tools/audit-links.mjs | grep BROKEN_LINKS    # 必须仍为 0
```

## 硬约束（磁盘可判定）
> **本轮结束时若 5 页中任一页仍有 `J3 ambiguous-citations`，或 `BROKEN_LINKS > 0`，则本轮视为未完成 —— 直接回报「未完成 + 哪几页 + 读数」。**

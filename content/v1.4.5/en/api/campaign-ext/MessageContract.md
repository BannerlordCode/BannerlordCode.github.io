---
title: "MessageContract"
description: "The base type for every message that crosses the Diamond socket: a [MessageId(byte)] attribute fixes the wire id, the abstract Serialize/Deserialize pair defines the payload, and a static per-type registry plus a cached creator makes instantiation allocation-free on the receiving side."
---
# MessageContract

**Namespace:** TaleWorlds.Network  
**Module:** TaleWorlds.Network  
**Type:** `public abstract class MessageContract`  
**Base:** `object`  
**File:** `TaleWorlds.Network/MessageContract.cs`

## Overview

`MessageContract` is the wire format contract for the Diamond socket protocol. A concrete message is an ordinary POCO with three obligations: a `[MessageId(n)]` attribute giving a `byte` wire id, a **parameterless** constructor, and overrides of `SerializeToNetworkMessage(INetworkMessageWriter)` and `DeserializeFromNetworkMessage(INetworkMessageReader)`. Everything else — the id table and the factory — is handled here.

The id table is two static dictionaries, `MessageContracts` (`Type -> byte`) and `MessageContractCreators` (`Type -> MessageContractCreator`), both built in the static constructor. `InitializeMessageContract(Type)` is the single entry point: if the type is already registered it returns immediately; otherwise it requires **exactly one** `[MessageId]` attribute (`GetCustomAttributesSafe(..., inherit: true).Length != 1` bails out silently), records the id, and builds a `MessageContractCreator<type>` via `Activator.CreateInstance` on the closed generic. The `protected MessageContract()` constructor calls `InitializeMessageContract(GetType())`, so simply constructing an instance registers it — you rarely call `GetContractId` yourself. `MessageId` then resolves straight out of the table.

`CreateMessageContract(Type)` is the receiving side's factory: it initialises the contract, then invokes the cached creator. Because `MessageContractCreator<T> where T : new()`, the receiving side can materialise a message without knowing its type at compile time — that is how `MessageContractHandlerManager.HandleNetworkMessage` turns a raw `NetworkMessage` into a typed object.

## Mental Model

Treat it as **"a wire id plus a hand-written codec, cached in a static table keyed by CLR type"**:

- **Two independent halves.** The *sender* calls `SerializeToNetworkMessage` on a message instance; the *receiver* first reads a byte id, maps it back to a `Type` via `MessageContractHandlerManager`, calls `CreateMessageContract`, then calls `DeserializeFromNetworkMessage`. Both halves must agree byte-for-byte on the payload layout — there is no schema, no length framing beyond what you write yourself, and no version negotiation.
- **Typical call order for adding a message:** decorate the class with `[MessageId]` → give it a public parameterless ctor → implement both overrides → register a handler with `MessageContractHandlerManager.AddMessageHandler<T>` on the side that receives it → construct and serialize an instance on the sending side. Nothing else in the engine touches your type; the tables fill themselves on first construction.
- **Common misuse trap — a missing or duplicated `[MessageId]` fails silently.** `InitializeMessageContract` returns without registering when the attribute count is not exactly one. You then get a `KeyNotFoundException` later, from `MessageContracts[_myType]`, far away from the real cause. Give every message exactly one `[MessageId]`, and make sure it is unique across your module — the table is keyed by type, not by id, so two types may silently share a wire id and corrupt the receiver's dispatch table instead.
- **Common misuse trap — forgetting the parameterless constructor.** `MessageContractCreator<T>` has the `new()` constraint. A message with only a constructor taking arguments registers fine (the contract constructor does not need one) but the creator's `Invoke()` will fail on the receiving side.
- **Common misuse trap — reading a different type than you wrote.** `INetworkMessageWriter.Write` / `INetworkMessageReader.Read` are typed (`Write(int)` vs `ReadInt32()`, `Write(byte[])` vs `ReadByte()`). A one-byte asymmetry desynchronises the whole stream and everything after it becomes garbage. Write a round-trip test.
- **Ordering hazard:** `DeserializeFromNetworkMessage` may be followed immediately by `HandleMessage`, which dispatches on the *same* thread that parsed the message. Handlers must be cheap and must not block.

## When to Use / When NOT to Use

**Use it when:**
- You are extending the Diamond socket protocol: lobby, matchmaking, custom-battle server/client, or any mod that adds a control message between two peers.
- You need a message that both ends of a connection understand and that must be dispatched to a typed handler by wire id.

**Do NOT use it when:**
- You want campaign state to cross a network boundary. Campaign objects are synchronized by their own replication systems (`NetworkMessage` subclasses in the campaign module), not by `MessageContract`.
- You need a save file. This is a socket protocol, not serialization to disk; nothing here touches the campaign save system.
- You need encryption or integrity. `MessageContract` provides neither; whatever protects the socket sits below it.

## Dependencies

- [MessageContractHandlerManager](../MessageContractHandlerManager) — the `byte -> Type -> handler` dispatch table; `HandleNetworkMessage` is the receiving entry point that calls back into this type.
- [MessageId](../MessageId) — the `[MessageId(byte)]` attribute that supplies the wire id; without exactly one of these a contract never registers.
- [MessageContractCreator](../MessageContractCreator) — the cached factory built per contract type by `InitializeMessageContract`.
- [NetworkMessage](../NetworkMessage) — the raw buffer a `MessageContract` serialises into and deserialises from.
- [INetworkMessageWriter](../INetworkMessageWriter) / [INetworkMessageReader](../INetworkMessageReader) — the typed read/write surface your two overrides use.
- [CoroutineManager](../CoroutineManager) — the other half of `TaleWorlds.Network`: the manual stepping model a message-driven handler usually drives.

## Key members

### `[MessageId(byte id)] public class MessageId : Attribute`

Not a member of `MessageContract`, but the class cannot work without it. `Id` is `{ get; private set; }`, set from the constructor. Exactly one instance must be present (including inherited ones) or registration is skipped.

### `protected MessageContract()`

Records `GetType()` into `_myType` and calls `InitializeMessageContract(_myType)`. There are no arguments — a contract is always constructed empty and then filled by `DeserializeFromNetworkMessage`.
- **Side effect:** constructing an instance of a message type registers it globally. This is why handlers can be registered before any message exists.
- **Note:** the ctor is `protected`, so only your own type (or a subclass) can invoke it, which is what keeps registration tied to the concrete type.

### `public byte MessageId => MessageContracts[_myType]`

Resolves the instance's wire id from the static table.
- **Throws** `KeyNotFoundException` if the type was never registered (missing/duplicated attribute).
- The property is named the same as the `MessageId` attribute class — the attribute is not a member here, only a lookup result.

### `public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

Write side. Called on the sender with a writer positioned after the id byte.
- **Return value:** none.
- **Contract:** write exactly what `DeserializeFromNetworkMessage` will read, in the same order, with matching types. Prefer explicit width (`Write(byte[] length)` then the bytes) over relying on the reader's framing.

### `public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

Read side. Called once on a freshly created instance by `MessageContractHandlerManager.HandleNetworkMessage`, immediately before the typed handler is invoked.
- **Contract:** must leave the reader positioned exactly where `SerializeToNetworkMessage` left the writer.
- **Trap:** a short read (asking for fewer bytes than were written) desynchronises every subsequent message on the same connection.

### `public static MessageContract CreateMessageContract(Type messageContractType)`

Initialises the contract if needed and invokes the cached `MessageContractCreator`.
- **Return semantics:** a new, empty instance of `messageContractType`, **not** populated — the caller must call `DeserializeFromNetworkMessage`.
- **Throws** `KeyNotFoundException` for an unregistered type (no `[MessageId]`), and `MissingMethodException`/`InvalidOperationException` from `Activator` if the type has no parameterless constructor.

### `internal static byte GetContractId(Type type)` / `internal static MessageContractCreator GetContractCreator(Type type)`

`internal`, so only the `TaleWorlds.Network` assembly and friends can use them. `MessageContractHandlerManager.AddMessageHandler<T>` uses the first. If you need the id from a mod, read the instance property instead.

### `private static void InitializeMessageContract(Type type)`

The single registration gate: idempotent, requires exactly one `[MessageId]`, and takes `lock (MessageContracts)` while mutating both tables. Because the two dictionaries are updated under one lock but *read* without one, a concurrent first-use from two threads can race — the `ContainsKey` re-check inside the lock is what prevents the duplicate-add exception.

## Examples

### Example 1 — a minimal message with an explicit length prefix

```csharp
using System.Text;
using TaleWorlds.Network;

namespace MyMod.Network
{
    [MessageId(210)]
    public class ClanNameQueryMessage : MessageContract
    {
        public string RequestedClanId { get; private set; }

        public ClanNameQueryMessage()
        {
        }

        public ClanNameQueryMessage(string clanId)
        {
            RequestedClanId = clanId;
        }

        public override void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)
        {
            byte[] payload = Encoding.UTF8.GetBytes(RequestedClanId ?? string.Empty);
            networkMessage.Write(payload.Length);      // always write the length explicitly
            for (int i = 0; i < payload.Length; i++)
            {
                networkMessage.Write(payload[i]);
            }
        }

        public override void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)
        {
            int length = networkMessage.ReadInt32();
            byte[] payload = new byte[length];
            for (int i = 0; i < length; i++)
            {
                payload[i] = networkMessage.ReadByte();
            }
            RequestedClanId = Encoding.UTF8.GetString(payload);
        }
    }
}
```

### Example 2 — sending and receiving it

```csharp
using TaleWorlds.Network;

namespace MyMod.Network
{
    public class MyServerSession
    {
        private readonly MessageContractHandlerManager _handlers = new MessageContractHandlerManager();

        public void Install()
        {
            _handlers.AddMessageHandler<ClanNameQueryMessage>(OnClanNameQuery);
        }

        private void OnClanNameQuery(ClanNameQueryMessage message)
        {
            byte wireId = message.MessageId;              // 210, resolved from the static table
            Campaign.Campaign.Current.Logger.PrintInformation("clan " + message.RequestedClanId);
        }

        public void Send(INetworkMessageWriter writer, string clanId)
        {
            var outgoing = new ClanNameQueryMessage(clanId);
            outgoing.SerializeToNetworkMessage(writer);
        }

        public void OnRawMessage(NetworkMessage raw)
        {
            // Reads the id byte, creates the contract, deserialises, dispatches.
            _handlers.HandleNetworkMessage(raw);
        }
    }
}
```

### Example 3 — a round-trip check you can run without a socket

```csharp
[Test]
public void ClanNameQueryMessage_RoundTrips()
{
    var buffer = new MemoryStream();
    var writer = new TestNetworkMessageWriter(buffer);
    new ClanNameQueryMessage("Sturgia").SerializeToNetworkMessage(writer);

    var reader = new TestNetworkMessageReader(buffer.ToArray());
    var contract = MessageContract.CreateMessageContract(typeof(ClanNameQueryMessage));
    contract.DeserializeFromNetworkMessage(reader);

    Assert.AreEqual("Sturgia", ((ClanNameQueryMessage)contract).RequestedClanId);
}
```

## Risks and crash boundaries

- **Save serialization:** none. `MessageContract` writes to an `INetworkMessageWriter`, i.e. a live socket buffer. Nothing here participates in the campaign save system, and a message contract can never be used to persist campaign state. Conversely, if you build a save format on top of this codec you get no versioning, no migration, and no compatibility guarantee across game updates.
- **Cross-domain dependencies:** the type is in `TaleWorlds.Network`, the low-level socket assembly. Both peers must load the same version — a client and a server running different builds will disagree about the wire protocol with no negotiation step. There is no handshake check on contract ids.
- **Load order:** registration happens on first construction or on the first `internal GetContractId` call. If `AddMessageHandler<T>` runs on a type that has not yet been initialised, it triggers `InitializeMessageContract` itself, so ordering is safe — but a type whose attribute is missing registers nothing and the `Dictionary.Add` in the handler manager throws immediately, which is the earliest and clearest failure you will get.
- **ID stability:** this is the sharpest edge in the class. `MessageId` is a **`byte`**, so you have 256 slots per registry table, and ids are the *only* thing the receiver dispatches on. Renumbering a message between game versions silently reinterprets traffic. Never reuse an id that a removed message used; never assume an id is free because you saw no `[MessageId]` in the source you have — the peer build may declare it.
- **Desynchronisation is silent.** A mismatch between `SerializeToNetworkMessage` and `DeserializeFromNetworkMessage` does not throw at the boundary; it produces garbage for every subsequent field and every subsequent message on that connection. Symmetry is the only defence.
- **`Activator.CreateInstance` in the registration path.** A contract type whose constructor throws, or which is not public, will fail during `InitializeMessageContract` — which may happen inside the network receive loop, turning an authoring mistake into a connection drop.
- **No payload limit.** Whatever you write is read back into an array you allocate from a length you read. A malformed or hostile length is an allocation you did not bound.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the surface is unchanged — `[MessageId]`, the protected constructor, the `MessageId` property, `CreateMessageContract`, and the two abstract serialization overrides all keep their signatures. `MessageContractHandlerManager` still resolves types through the same static tables.
- **v1.4.5:** `InitializeMessageContract` requires **exactly one** `[MessageId]` attribute (`Length != 1` returns without registering). Two attributes on one type is as fatal as zero.
- **v1.4.5:** there is no `Dispose`, no `IsValid` and no `OnReceive` member. The contract is a pure data carrier; all behaviour lives in the handler you register.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](../)
- ↔ Sibling: [MessageContractHandlerManager](../MessageContractHandlerManager) — dispatch table keyed by this contract's wire id
- ↔ Sibling: [MessageId](../MessageId) — the attribute that supplies the wire id
- ↔ Sibling: [MessageContractCreator](../MessageContractCreator) — the cached per-type factory
- ↔ Sibling: [NetworkMessage](../NetworkMessage) — the raw buffer read/written here
- ↔ Sibling: [INetworkMessageWriter](../INetworkMessageWriter) / [INetworkMessageReader](../INetworkMessageReader) — the typed codec surface
- ↔ Sibling: [CoroutineManager](../CoroutineManager) — the other half of the `TaleWorlds.Network` model

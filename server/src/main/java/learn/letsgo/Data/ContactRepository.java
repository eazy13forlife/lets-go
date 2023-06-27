package learn.letsgo.Data;

import learn.letsgo.Models.Contact;

import java.util.List;

public interface ContactRepository {
    Contact findById(int contactId);

    Contact create(Contact contact);

    boolean update(Contact contact);

    boolean delete(Contact contact);

    List<Contact> findAll(int appUserId);
}